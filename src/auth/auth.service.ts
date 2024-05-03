import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CACHE_MANAGER } from '@nestjs/common/cache';
import { ConfigService } from '@nestjs/config';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid, validate as uuidValidate } from 'uuid';
import { Cache } from 'cache-manager';

import { UserEntity } from '../users/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../users/users.service';

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
    const userTempId = uuid();
    await this.cacheManager.set(
      this.configService.get('CACHE_GOOGLE_PREFIX'),
      userTempId,
      10000,
    );
    {
      // handles the Google OAuth2 callback
      console.log(req.user);
      const jwt: string = req?.user?.jwt;
      if (jwt) res.redirect('http://localhost:4200/login/succes/' + jwt);
      else res.redirect('http://localhost:4200/login/failure');
    }
  }

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  public async googleLogin(req) {
    console.log(req);
    const authorization = req.get('Authorization');
    if (!authorization) {
      throw new Error('Method not implemented.');
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
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(payload: CreateUserDto) {
    await this.usersService.create(payload);
    return { message: 'User was created successfully.' };
  }

  private async handleDataBaseUser() {
    return Promise.resolve(undefined);
  }
}
