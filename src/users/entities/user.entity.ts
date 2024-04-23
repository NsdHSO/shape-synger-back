import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  @ApiProperty({
    description: 'Like: ion vasile',
    required: true,
    example: 'nanem',
  })
  username: string;
  @Column()
  @ApiProperty()
  email: string;
  @Column()
  @ApiProperty()
  password: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
