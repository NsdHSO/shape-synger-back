import { Entity } from 'typeorm';

import { BaseCategoryDto } from '../dto/base-category.dto';

@Entity()
export class CategoryEntity extends BaseCategoryDto {}
