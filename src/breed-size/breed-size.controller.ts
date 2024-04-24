import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { BreedSizeService } from './breed-size.service';
import { CreateBreedSizeDto } from './dto/create-breed-size.dto';

@ApiBearerAuth()
@ApiTags('breed-size')
@Controller('breed-size')
export class BreedSizeController {
  constructor(private readonly breedSizeService: BreedSizeService) {}

  @Post()
  create(@Body() createBreedSizeDto: CreateBreedSizeDto) {
    return this.breedSizeService.create(createBreedSizeDto);
  }

  @Get()
  findAll() {
    return this.breedSizeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breedSizeService.findOne(+id);
  }
}
