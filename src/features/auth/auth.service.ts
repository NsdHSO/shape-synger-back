import { Inject, Injectable, InternalServerErrorException, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { CACHE_MANAGER } from '@nestjs/common/cache';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { validate as uuidValidate } from 'uuid';

import { sign } from 'jsonwebtoken';

import { CreateUserDto } from '../../dto/create-user.dto';
import { UsersService } from '../../users/users.service';

export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly configService: ConfigService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async googleRedirect(req, res) {
    const userTempId = req.query['state'];
    await this.cacheManager.set(
      this.configService.get('CACHE_GOOGLE_PREFIX') + userTempId,
      req.user,
      10000,
    );
    {
      res.send('<script>window.close()</script>');
    }
  }

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  public async googleLogin(req) {
    const authorization = req.get('Authorization');
    if (!authorization) {
      throw new UnauthorizedException();
    }

    const userTempId = authorization.replace('Bearer ', '');
    if (!uuidValidate(userTempId)) {
      throw new UnauthorizedException();
    }

    const googleUser = await this.cacheManager.get(
      this.configService.get('CACHE_GOOGLE_PREFIX') + userTempId,
    );

    await this.handleDataBaseUser();

    return googleUser;
  }

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOneBy(email);
    const passwordVerified = await argon2.verify(user.password, password);
    if (!user || !passwordVerified) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email, userName: user.username };
    const jwt = await this.jwtService.signAsync(payload);
    return { jwt };
  }
  async signUp(payload: CreateUserDto) {
    const hashedPassword = await argon2.hash(payload.password);

    const payloadToBeSaved = {
      ...payload,
      password: hashedPassword,
    };
    await this.usersService.create(payloadToBeSaved);
    return { message: 'User was created successfully.' };
  }

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    try {
      const payload = {
        thirdPartyId,
        provider,
      };

      const jwt: string = sign(payload, this.configService.get('JWT_SECRET'), {
        expiresIn: 3600,
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

  private async handleDataBaseUser() {
    return Promise.resolve(undefined);
  }
}
