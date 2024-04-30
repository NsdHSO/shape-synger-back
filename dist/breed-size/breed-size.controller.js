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
exports.BreedSizeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const breed_size_service_1 = require("./breed-size.service");
const create_breed_size_dto_1 = require("./dto/create-breed-size.dto");
let BreedSizeController = exports.BreedSizeController = class BreedSizeController {
    constructor(breedSizeService) {
        this.breedSizeService = breedSizeService;
    }
    create(createBreedSizeDto) {
        return this.breedSizeService.create(createBreedSizeDto);
    }
    findAll() {
        return this.breedSizeService.findAll();
    }
    findOne(id) {
        return this.breedSizeService.findOne(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_breed_size_dto_1.CreateBreedSizeDto]),
    __metadata("design:returntype", void 0)
], BreedSizeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BreedSizeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BreedSizeController.prototype, "findOne", null);
exports.BreedSizeController = BreedSizeController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('breed-size'),
    (0, common_1.Controller)('breed-size'),
    __metadata("design:paramtypes", [breed_size_service_1.BreedSizeService])
], BreedSizeController);
//# sourceMappingURL=breed-size.controller.js.map