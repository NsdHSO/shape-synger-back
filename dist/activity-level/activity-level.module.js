"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLevelModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const activity_level_service_1 = require("./activity-level.service");
const activity_level_controller_1 = require("./activity-level.controller");
const activity_level_entity_1 = require("./entities/activity-level.entity");
let ActivityLevelModule = exports.ActivityLevelModule = class ActivityLevelModule {
};
exports.ActivityLevelModule = ActivityLevelModule = __decorate([
    (0, common_1.Module)({
        controllers: [activity_level_controller_1.ActivityLevelController],
        providers: [activity_level_service_1.ActivityLevelService],
        imports: [typeorm_1.TypeOrmModule.forFeature([activity_level_entity_1.ActivityLevelEntity])],
    })
], ActivityLevelModule);
//# sourceMappingURL=activity-level.module.js.map