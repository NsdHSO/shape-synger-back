import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ActivityLevelService } from './activity-level.service';
import { ActivityLevelController } from './activity-level.controller';
import { ActivityLevelEntity } from './entities/activity-level.entity';

@Module({
  controllers: [ActivityLevelController],
  providers: [ActivityLevelService],
  imports: [TypeOrmModule.forFeature([ActivityLevelEntity])]
})
export class ActivityLevelModule {
}
