import { CreateDateColumn } from 'typeorm';

import { BaseOverview } from './base-overview.dto';

export class CreateOverviewDto extends BaseOverview {
  @CreateDateColumn()
  created_at: Date;
}
