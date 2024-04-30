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
exports.OverviewService = void 0;
const common_1 = require("@nestjs/common");
const breed_service_1 = require("../breed/breed.service");
let OverviewService = exports.OverviewService = class OverviewService {
    constructor(breedEntityMongoRepository) {
        this.breedEntityMongoRepository = breedEntityMongoRepository;
    }
    async findAll() {
        const breedContains = await this.breedEntityMongoRepository.findAll();
        return [
            {
                title: 'Animals',
                cards: [
                    {
                        title: 'Breed',
                        superScript: breedContains.length,
                        icon: 'beaker-outline',
                        subTitle: '',
                        color: '--ion-color-danger',
                        component: 'BreedComponent',
                    },
                ],
            },
            {
                title: 'Climate',
                cards: [
                    {
                        title: 'Weather conditions',
                        superScript: 22,
                        icon: 'beaker-outline',
                        subTitle: '',
                        color: '--ion-color-success',
                        component: 'WeatherComponent',
                    },
                ],
            },
        ];
    }
};
exports.OverviewService = OverviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [breed_service_1.BreedService])
], OverviewService);
//# sourceMappingURL=overview.service.js.map