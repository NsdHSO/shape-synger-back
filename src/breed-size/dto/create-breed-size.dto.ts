import { CreateDateColumn } from 'typeorm';

import { BaseSizeCategoryDto } from './base-size-category.dto';

export class CreateBreedSizeDto extends BaseSizeCategoryDto {
  @CreateDateColumn()
  created_at: Date;
}
