import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ActivityLevelModule } from './activity-level/activity-level.module';
import { AuthModule } from './auth/auth.module';
import { BreedSizeModule } from './breed-size/breed-size.module';
import { BreedModule } from './breed/breed.module';
import { CategoriesModule } from './categories/categories.module';
import { LoggingMiddlewareService } from './logging-middleware/logging-middleware.service';
import { OverviewModule } from './overview/overview.module';
import { UsersModule } from './users/users.module';

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
  providers: [AppService, LoggingMiddlewareService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  consumer.apply(LoggingMiddlewareService).forRoutes('*');
  }
}
