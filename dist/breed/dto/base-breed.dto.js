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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBreedDto = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const breed_size_entity_1 = require("../../breed-size/entities/breed-size.entity");
const activity_level_entity_1 = require("../../activity-level/entities/activity-level.entity");
class BaseBreedDto {
}
exports.BaseBreedDto = BaseBreedDto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BaseBreedDto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    __metadata("design:type", String)
], BaseBreedDto.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    __metadata("design:type", String)
], BaseBreedDto.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    __metadata("design:type", String)
], BaseBreedDto.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    __metadata("design:type", Number)
], BaseBreedDto.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => breed_size_entity_1.BreedSizeEntity),
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    (0, typeorm_1.JoinColumn)({ name: 'breed_size_id' }),
    __metadata("design:type", String)
], BaseBreedDto.prototype, "breedSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    (0, typeorm_1.ManyToOne)(() => activity_level_entity_1.ActivityLevelEntity),
    (0, typeorm_1.JoinColumn)({ name: 'energy_level_id' }),
    __metadata("design:type", String)
], BaseBreedDto.prototype, "energyLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    (0, typeorm_1.ManyToOne)(() => activity_level_entity_1.ActivityLevelEntity),
    (0, typeorm_1.JoinColumn)({ name: 'grooming_needs_id' }),
    __metadata("design:type", String)
], BaseBreedDto.prototype, "groomingNeeds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    (0, typeorm_1.ManyToOne)(() => activity_level_entity_1.ActivityLevelEntity),
    (0, typeorm_1.JoinColumn)({ name: 'exercise_needs_id' }),
    __metadata("design:type", String)
], BaseBreedDto.prototype, "exerciseNeeds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], BaseBreedDto.prototype, "temperament", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id of base size', required: true }),
    (0, typeorm_1.Column)({ nullable: false, type: 'simple-array' }),
    __metadata("design:type", Array)
], BaseBreedDto.prototype, "healthIssues", void 0);
//# sourceMappingURL=base-breed.dto.js.map