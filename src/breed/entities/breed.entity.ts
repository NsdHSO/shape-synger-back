import { Entity } from 'typeorm';

import { BaseBreedDto } from '../dto/base-breed.dto';

@Entity('breed')
export class BreedEntity extends BaseBreedDto {}
