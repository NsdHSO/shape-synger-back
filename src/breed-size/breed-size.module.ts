import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedSizeService } from './breed-size.service';
import { BreedSizeController } from './breed-size.controller';
import { BreedSizeEntity } from './entities/breed-size.entity';

@Module({
  controllers: [BreedSizeController],
  providers: [BreedSizeService],
  imports: [TypeOrmModule.forFeature([BreedSizeEntity])],
})
export class BreedSizeModule {}
