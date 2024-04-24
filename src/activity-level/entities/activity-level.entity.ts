import { Entity } from 'typeorm';

import { BaseActivityLevelDto } from '../dto/base-activity-level.dto';

@Entity('activity-level')
export class ActivityLevelEntity extends BaseActivityLevelDto {}
