import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

import { BreedSizeEntity } from '../../breed-size/entities/breed-size.entity';
import { ActivityLevelEntity } from '../../activity-level/entities/activity-level.entity';
import { ActivityLevelType, SizeType } from '../../core/type';

export class BaseBreedDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @ApiProperty({ description: 'id of base size', required: true })
  name: string;

  @Column()
  @ApiProperty({ description: 'id of base size', required: true })
  description: string;

  @Column()
  @ApiProperty({ description: 'id of base size', required: true })
  origin: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'id of base size', required: true })
  age: number;

  @ManyToOne(() => BreedSizeEntity)
  @ApiProperty({ description: 'id of base size', required: true })
  @JoinColumn({ name: 'breed_size_id' })
  breedSize: SizeType;

  @ApiProperty({ description: 'id of base size', required: true })
  @ManyToOne(() => ActivityLevelEntity)
  @JoinColumn({ name: 'energy_level_id' })
  energyLevel: ActivityLevelType;

  @ApiProperty({ description: 'id of base size', required: true })
  @ManyToOne(() => ActivityLevelEntity)
  @JoinColumn({ name: 'grooming_needs_id' })
  groomingNeeds: ActivityLevelType;

  @ApiProperty({ description: 'id of base size', required: true })
  @ManyToOne(() => ActivityLevelEntity)
  @JoinColumn({ name: 'exercise_needs_id' })
  exerciseNeeds: ActivityLevelType;

  @ApiProperty({ description: 'id of base size', required: true })
  @Column('simple-array')
  temperament: string[];

  @ApiProperty({ description: 'id of base size', required: true })
  @Column({ nullable: false, type: 'simple-array' })
  healthIssues: string[];
}
