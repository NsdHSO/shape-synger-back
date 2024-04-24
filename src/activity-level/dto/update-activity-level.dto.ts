import { PartialType } from '@nestjs/swagger';

import { CreateDateColumn } from 'typeorm';

import { CreateActivityLevelDto } from './create-activity-level.dto';

export class UpdateActivityLevelDto extends PartialType(
  CreateActivityLevelDto,
) {
  @CreateDateColumn()
  updated_at: Date;
}
