import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { CacheModule } from '@nestjs/common/cache';

import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../../users/users.module';

import { UserEntity } from '../../users/entities/user.entity';
import { GoogleStrategyService } from './strategies/google-strategy/google-strategy.service';
import { JwtStrategyService } from './strategies/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    PassportModule,
    CacheModule.register({ ttl: 10000, max: 10000000 }),
    UsersModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '1d',
        },
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity]),
    ConfigModule.forRoot(),
  ],
  controllers: [AuthController],
  providers: [GoogleStrategyService, AuthService, JwtStrategyService],
  exports: [AuthService],
})
export class AuthModule {}
