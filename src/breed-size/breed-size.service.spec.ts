import { Test, TestingModule } from '@nestjs/testing';
import { BreedSizeService } from './breed-size.service';

describe('BreedSizeService', () => {
  let service: BreedSizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedSizeService],
    }).compile();

    service = module.get<BreedSizeService>(BreedSizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
