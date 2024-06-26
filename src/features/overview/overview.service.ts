import { Injectable } from '@nestjs/common';

@Injectable()
export class OverviewService {
  async findAll() {
    return [
      {
        title: 'Animals',
        cards: [
          {
            title: 'Breed',
            superScript: 22,
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
