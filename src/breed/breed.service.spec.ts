import { Test, TestingModule } from '@nestjs/testing';

import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedService } from './breed.service';
import { BreedEntity } from './entities/breed.entity';

describe('BreedService', () => {
  let service: BreedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([BreedEntity])],
      providers: [BreedService]
    }).compile();

    service = module.get<BreedService>(BreedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
