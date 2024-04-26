import { PartialType } from '@nestjs/swagger';

import { CreateDateColumn } from 'typeorm';

import { CreateOverviewDto } from './create-overview.dto';

export class UpdateOverviewDto extends PartialType(CreateOverviewDto) {
  @CreateDateColumn()
  updated_at: Date;
}
