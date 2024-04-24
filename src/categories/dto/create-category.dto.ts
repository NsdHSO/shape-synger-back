import { BaseCategoryDto } from './base-category.dto';

export class CreateCategoryDto extends BaseCategoryDto{
  created_at: Date;
}
