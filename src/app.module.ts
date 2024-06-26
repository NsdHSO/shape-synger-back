import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './features/auth/auth.module';
import { LoggingMiddlewareService } from './features/logging-middleware/logging-middleware.service';
import { OverviewModule } from './features/overview/overview.module';
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
        entities: [__dirname + '/../**/*.entity.js']
      }),
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
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
