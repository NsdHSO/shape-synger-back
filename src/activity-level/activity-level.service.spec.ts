import { Test, TestingModule } from '@nestjs/testing';
import { ActivityLevelService } from './activity-level.service';

describe('ActivityLevelService', () => {
  let service: ActivityLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityLevelService],
    }).compile();

    service = module.get<ActivityLevelService>(ActivityLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
