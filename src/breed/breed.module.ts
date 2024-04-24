import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { BreedEntity } from './entities/breed.entity';

@Module({
  controllers: [BreedController],
  providers: [BreedService],
  imports: [TypeOrmModule.forFeature([BreedEntity])],
})
export class BreedModule {}
