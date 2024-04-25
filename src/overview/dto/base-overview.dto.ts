import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class BaseOverview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: 'id of base size', required: true })
  title: string;

  @Column()
  @ApiProperty({ description: 'id of base size', required: true })
  superScript: string;

  @Column()
  @ApiProperty({ description: 'id of base size', required: true })
  icon: string;

  @Column()
  @ApiProperty({ description: 'id of base size', required: true })
  subTitle: string;

  @Column()
  @ApiProperty({ description: 'id of base size', required: true })
  color: string;

  @Column()
  @ApiProperty({ description: 'id of base size', required: true })
  componentName: string;
}
