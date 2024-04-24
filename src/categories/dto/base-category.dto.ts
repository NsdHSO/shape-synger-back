import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseCategoryDto {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id?: string;
  /**
   * Value what transfer in FE
   */
  @ApiProperty({
    description: 'Like: Baltata Romaneasca',
    required: true,
    example: 'Baltata Romaneasca',
  })
  @Column()
  value: string;

  @ApiProperty({
    required: true,
  })
  @Column()
  description?: string;
}
