import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

import { ActivityLevelType } from '../../core/type/';

export class BaseActivityLevelDto {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ description: 'id of base size', required: true })
  @Column({ type: 'varchar', length: 10 })
  level: ActivityLevelType;
}
