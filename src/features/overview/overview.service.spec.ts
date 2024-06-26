import { Test, TestingModule } from '@nestjs/testing';

import { OverviewService } from './overview.service';
import { BreedService } from '../breed/breed.service';

describe('OverviewService', () => {
  let service: OverviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OverviewService,
        { provide: BreedService, useValue: { findAll: () => {} } },
      ],
    }).compile();

    service = module.get<OverviewService>(OverviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
