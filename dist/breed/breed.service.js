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
exports.BreedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const breed_entity_1 = require("./entities/breed.entity");
const GenericQueryRersponse_1 = require("../core/interface/GenericQueryRersponse");
const array_1 = require("../core/array");
let BreedService = exports.BreedService = class BreedService {
    constructor(breedEntityMongoRepository) {
        this.breedEntityMongoRepository = breedEntityMongoRepository;
    }
    async create(createBreedDto) {
        return await this.breedEntityMongoRepository
            .save({
            ...createBreedDto,
            created_at: new Date(),
        })
            .then(() => ({
            message: GenericQueryRersponse_1.QueryStatusMessage.DATA_SAVED_SUCCESSFULLY,
            code: 200,
        }))
            .catch((error) => {
            throw {
                message: GenericQueryRersponse_1.ErrorMessage.BAD_REQUEST,
                code: error.statusCode,
            };
        });
    }
    async findAll() {
        return await this.breedEntityMongoRepository.find();
    }
    async findOne(id) {
        return await this.breedEntityMongoRepository.findOne({ where: { id: id } });
    }
    async update(id, updateBreedDto) {
        const breed = await this.breedEntityMongoRepository.findOne({
            where: { id: id },
        });
        if (!breed) {
            throw new common_1.NotFoundException(`Breed with ID ${id} not found`);
        }
        const updates = {};
        if (updateBreedDto.name) {
            updates.name = updateBreedDto.name;
        }
        if (updateBreedDto.description) {
            updates.description = updateBreedDto.description;
        }
        if (updateBreedDto.origin) {
            updates.origin = updateBreedDto.origin;
        }
        if (updateBreedDto.breedSize) {
            const breedSizeId = array_1.sizeStadium.indexOf(updateBreedDto.breedSize) + 1;
            updates.breedSize = breedSizeId;
        }
        if (updateBreedDto.energyLevel) {
            const energyLevelId = array_1.levelStadium.indexOf(updateBreedDto.energyLevel) + 1;
            updates.energyLevel = energyLevelId;
        }
        if (updateBreedDto.groomingNeeds) {
            const groomingNeedsId = array_1.levelStadium.indexOf(updateBreedDto.groomingNeeds) + 1;
            updates.groomingNeeds = groomingNeedsId;
        }
        if (updateBreedDto.exerciseNeeds) {
            const exerciseNeedsId = array_1.levelStadium.indexOf(updateBreedDto.exerciseNeeds) + 1;
            updates.exerciseNeeds = exerciseNeedsId;
        }
        if (updateBreedDto.temperament) {
            updates.temperament = updateBreedDto.temperament;
        }
        if (updateBreedDto.healthIssues) {
            updates.healthIssues = updateBreedDto.healthIssues;
        }
        return await this.breedEntityMongoRepository.update(id, updates);
    }
    remove(id) {
        return `This action removes a #${id} breed`;
    }
};
exports.BreedService = BreedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(breed_entity_1.BreedEntity)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], BreedService);
//# sourceMappingURL=breed.service.js.map