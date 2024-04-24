import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ActivityLevelService } from './activity-level.service';
import { CreateActivityLevelDto } from './dto/create-activity-level.dto';
import { UpdateActivityLevelDto } from './dto/update-activity-level.dto';

@Controller('activity-level')
@ApiBearerAuth()
@ApiTags('activity-level')
export class ActivityLevelController {
  constructor(private readonly activityLevelService: ActivityLevelService) {}

  @Post()
  create(@Body() createActivityLevelDto: CreateActivityLevelDto) {
    return this.activityLevelService.create(createActivityLevelDto);
  }

  @Get()
  findAll() {
    return this.activityLevelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityLevelService.findOne(+id);
  }
}
