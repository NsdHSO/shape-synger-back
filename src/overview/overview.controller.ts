import { Controller, Get, UseGuards } from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';

import { OverviewService } from './overview.service';

@ApiBearerAuth()
@ApiTags('overview')
@UseGuards(AuthGuard('jwt'))
@Controller('overview')
export class OverviewController {
  constructor(private readonly overviewService: OverviewService) {}

  @Get()
  findAll() {
    return this.overviewService.findAll().then(c => btoa(JSON.stringify(c)))
  }
}
