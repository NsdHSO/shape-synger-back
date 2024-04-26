import { Controller, Get } from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { OverviewService } from './overview.service';

@ApiBearerAuth()
@ApiTags('overview')
@Controller('overview')
export class OverviewController {
  constructor(private readonly overviewService: OverviewService) {}

  @Get()
  findAll() {
    return this.overviewService.findAll();
  }
}
