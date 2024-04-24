import { CreateDateColumn } from 'typeorm';

import { BaseActivityLevelDto } from './base-activity-level.dto';

export class CreateActivityLevelDto extends BaseActivityLevelDto {
  @CreateDateColumn()
  created_at: Date;
}
