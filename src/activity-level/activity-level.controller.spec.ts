import { Test, TestingModule } from '@nestjs/testing';

import { ActivityLevelController } from './activity-level.controller';
import { ActivityLevelService } from './activity-level.service';

describe('ActivityLevelController', () => {
  let controller: ActivityLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityLevelController],
      providers: [ActivityLevelService],
    }).compile();

    controller = module.get<ActivityLevelController>(ActivityLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
