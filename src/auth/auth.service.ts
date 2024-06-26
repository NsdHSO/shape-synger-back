import { Inject, Injectable, InternalServerErrorException, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CACHE_MANAGER } from '@nestjs/common/cache';
import { ConfigService } from '@nestjs/config';

import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { validate as uuidValidate } from 'uuid';

import { sign } from 'jsonwebtoken';

import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly configService: ConfigService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
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

  async signIn(email, pass) {
    const user = await this.usersService.findOneBy(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      jwt: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(payload: CreateUserDto) {
    await this.usersService.create(payload);
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
