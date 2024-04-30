"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLevelController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const activity_level_service_1 = require("./activity-level.service");
const create_activity_level_dto_1 = require("./dto/create-activity-level.dto");
let ActivityLevelController = exports.ActivityLevelController = class ActivityLevelController {
    constructor(activityLevelService) {
        this.activityLevelService = activityLevelService;
    }
    create(createActivityLevelDto) {
        return this.activityLevelService.create(createActivityLevelDto);
    }
    findAll() {
        return this.activityLevelService.findAll();
    }
    findOne(id) {
        return this.activityLevelService.findOne(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_activity_level_dto_1.CreateActivityLevelDto]),
    __metadata("design:returntype", void 0)
], ActivityLevelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActivityLevelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActivityLevelController.prototype, "findOne", null);
exports.ActivityLevelController = ActivityLevelController = __decorate([
    (0, common_1.Controller)('activity-level'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('activity-level'),
    __metadata("design:paramtypes", [activity_level_service_1.ActivityLevelService])
], ActivityLevelController);
//# sourceMappingURL=activity-level.controller.js.map