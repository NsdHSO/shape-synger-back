import { PartialType } from '@nestjs/swagger';

import { UpdateDateColumn } from 'typeorm';

import { CreateBreedSizeDto } from './create-breed-size.dto';

export class UpdateBreedSizeDto extends PartialType(CreateBreedSizeDto) {
  @UpdateDateColumn()
  updated_at: Date;
}
