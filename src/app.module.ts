import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { BreedModule } from './breed/breed.module';
import { BreedSizeModule } from './breed-size/breed-size.module';
import { ActivityLevelModule } from './activity-level/activity-level.module';
import { OverviewModule } from './overview/overview.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DB_URL'),
        synchronize: configService.get('DB_SYNCHRONIZE'),
        entities: ['./dist/**/*.entity{.ts,.js}'],
      }),
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    CategoriesModule,
    BreedModule,
    BreedSizeModule,
    ActivityLevelModule,
    OverviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
