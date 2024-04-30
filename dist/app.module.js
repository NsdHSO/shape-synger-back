"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const activity_level_module_1 = require("./activity-level/activity-level.module");
const auth_module_1 = require("./auth/auth.module");
const breed_size_module_1 = require("./breed-size/breed-size.module");
const breed_module_1 = require("./breed/breed.module");
const categories_module_1 = require("./categories/categories.module");
const logging_middleware_service_1 = require("./logging-middleware/logging-middleware.service");
const overview_module_1 = require("./overview/overview.module");
const users_module_1 = require("./users/users.module");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logging_middleware_service_1.LoggingMiddlewareService).forRoutes('*');
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    url: configService.get('DB_URL'),
                    synchronize: configService.get('DB_SYNCHRONIZE'),
                    entities: [__dirname + '/../**/*.entity.js']
                }),
            }),
            config_1.ConfigModule.forRoot(),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            categories_module_1.CategoriesModule,
            breed_module_1.BreedModule,
            breed_size_module_1.BreedSizeModule,
            activity_level_module_1.ActivityLevelModule,
            overview_module_1.OverviewModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, logging_middleware_service_1.LoggingMiddlewareService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map