import { PartialType } from '@nestjs/swagger';
import { CreateBreedSizeDto } from './create-breed-size.dto';
import { UpdateDateColumn } from 'typeorm';

export class UpdateBreedSizeDto extends PartialType(CreateBreedSizeDto) {
  @UpdateDateColumn()
  updated_at: Date;
}
