import { forwardRef, Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { OverviewService } from './overview.service';
import { OverviewController } from './overview.controller';
import { OverviewEntity } from './entities/overview.entity';
import { BreedModule } from '../breed/breed.module';

@Module({
  controllers: [OverviewController],
  providers: [OverviewService],
  imports: [
    TypeOrmModule.forFeature([OverviewEntity]),
    forwardRef(() => BreedModule),
  ],
})
export class OverviewModule {}
