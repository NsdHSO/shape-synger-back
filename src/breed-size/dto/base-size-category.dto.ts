import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

import { SizeType } from '../../core/type';

export class BaseSizeCategoryDto {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ description: 'id of base size', required: true })
  @Column({ type: 'varchar', length: 10 })
  size: SizeType;
}
