import { Injectable } from '@nestjs/common';

import { BreedService } from '../breed/breed.service';

@Injectable()
export class OverviewService {
  constructor(private breedEntityMongoRepository: BreedService) {}

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
}
