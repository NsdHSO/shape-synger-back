import { Test, TestingModule } from '@nestjs/testing';

import { BreedSizeController } from './breed-size.controller';
import { BreedSizeService } from './breed-size.service';

fdescribe('BreedSizeController', () => {
  let controller: BreedSizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreedSizeController],
      providers: [BreedSizeService],
    }).compile();

    controller = module.get<BreedSizeController>(BreedSizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
