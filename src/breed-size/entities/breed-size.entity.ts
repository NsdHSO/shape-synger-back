import { Entity } from 'typeorm';

import { BaseSizeCategoryDto } from '../dto/base-size-category.dto';

@Entity('breed-size')
export class BreedSizeEntity extends BaseSizeCategoryDto {}
