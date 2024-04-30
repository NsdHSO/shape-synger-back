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
exports.ActivityLevelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const GenericQueryRersponse_1 = require("../core/interface/GenericQueryRersponse");
const activity_level_entity_1 = require("./entities/activity-level.entity");
let ActivityLevelService = exports.ActivityLevelService = class ActivityLevelService {
    constructor(activityLevelDtoMongoRepository) {
        this.activityLevelDtoMongoRepository = activityLevelDtoMongoRepository;
    }
    async create(createActivityLevelDto) {
        if (typeof createActivityLevelDto.level !== 'string' ||
            !['low', 'medium', 'high'].includes(createActivityLevelDto.level)) {
            throw new common_1.BadRequestException('Invalid activity level', "'low', 'medium', 'high'");
        }
        const baseActivityLevelDto = await this.activityLevelDtoMongoRepository.findOne({
            where: { level: createActivityLevelDto.level },
        });
        if (baseActivityLevelDto) {
            throw new common_1.ConflictException('Activity size with this value already exists');
        }
        return await this.activityLevelDtoMongoRepository
            .save({
            ...createActivityLevelDto,
            created_at: new Date(),
        })
            .then(() => ({
            message: GenericQueryRersponse_1.QueryStatusMessage.DATA_SAVED_SUCCESSFULLY,
            code: 200,
        }));
    }
    async findAll() {
        return await this.activityLevelDtoMongoRepository.find();
    }
    async findOne(id) {
        return await this.activityLevelDtoMongoRepository.findOne({
            where: { id: id },
        });
    }
    remove(id) {
        return `This action removes a #${id} activityLevel`;
    }
};
exports.ActivityLevelService = ActivityLevelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(activity_level_entity_1.ActivityLevelEntity)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], ActivityLevelService);
//# sourceMappingURL=activity-level.service.js.map