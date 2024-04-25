import { PartialType } from '@nestjs/swagger';
import { CreateOverviewDto } from './create-overview.dto';
import { CreateDateColumn } from 'typeorm';

export class UpdateOverviewDto extends PartialType(CreateOverviewDto) {
  @CreateDateColumn()
  updated_at: Date;
}
