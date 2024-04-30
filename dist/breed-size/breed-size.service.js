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
exports.BreedSizeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const breed_size_entity_1 = require("./entities/breed-size.entity");
const GenericQueryRersponse_1 = require("../core/interface/GenericQueryRersponse");
let BreedSizeService = exports.BreedSizeService = class BreedSizeService {
    constructor(breedSizeEntityMongoRepository) {
        this.breedSizeEntityMongoRepository = breedSizeEntityMongoRepository;
    }
    async create(createBreedSizeDto) {
        if (typeof createBreedSizeDto.size !== 'string' ||
            !['small', 'medium', 'large'].includes(createBreedSizeDto.size)) {
            throw new common_1.BadRequestException('Invalid activity level', "'small', 'medium', 'large'");
        }
        const breedSizeEntity = await this.breedSizeEntityMongoRepository.findOne({
            where: { size: createBreedSizeDto.size },
        });
        if (breedSizeEntity) {
            throw new common_1.ConflictException('Breed size with this value already exists');
        }
        return await this.breedSizeEntityMongoRepository
            .save({
            ...createBreedSizeDto,
            created_at: new Date(),
        })
            .then(() => ({
            message: GenericQueryRersponse_1.QueryStatusMessage.DATA_SAVED_SUCCESSFULLY,
            code: 200,
        }));
    }
    async findAll() {
        return await this.breedSizeEntityMongoRepository.find();
    }
    async findOne(id) {
        return await this.breedSizeEntityMongoRepository.findOne({
            where: { id: id },
        });
    }
    remove(id) {
        return `This action removes a #${id} breedSize`;
    }
};
exports.BreedSizeService = BreedSizeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(breed_size_entity_1.BreedSizeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BreedSizeService);
//# sourceMappingURL=breed-size.service.js.map