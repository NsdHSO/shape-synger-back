import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { MongoRepository } from 'typeorm';

import { CreateActivityLevelDto } from './dto/create-activity-level.dto';
import { UpdateActivityLevelDto } from './dto/update-activity-level.dto';
import {
  QueryResponse,
  QueryStatusMessage,
} from '../core/interface/GenericQueryRersponse';
import { ActivityLevelEntity } from './entities/activity-level.entity';
import { ActivityLevelType } from '../core/type';

@Injectable()
export class ActivityLevelService {
  constructor(
    @InjectRepository(ActivityLevelEntity)
    private activityLevelDtoMongoRepository: MongoRepository<ActivityLevelEntity>,
  ) {}

  async create(createActivityLevelDto: CreateActivityLevelDto) {
    if (
      typeof createActivityLevelDto.level !== 'string' ||
      !['low', 'medium', 'high'].includes(createActivityLevelDto.level)
    ) {
      throw new BadRequestException('Invalid activity level', "'low', 'medium', 'high'");
    }
    const baseActivityLevelDto =
      await this.activityLevelDtoMongoRepository.findOne({
        where: { level: createActivityLevelDto.level },
      });
    if (baseActivityLevelDto) {
      throw new ConflictException(
        'Activity size with this value already exists',
      );
    }

    return await this.activityLevelDtoMongoRepository
      .save({
        ...createActivityLevelDto,
        created_at: new Date(),
      })
      .then(
        (value) =>
          ({
            message: QueryStatusMessage.DATA_SAVED_SUCCESSFULLY,
            code: 200,
          }) as QueryResponse,
      );
  }

  async findAll() {
    return await this.activityLevelDtoMongoRepository.find();
  }

  async findOne(id: number) {
    return await this.activityLevelDtoMongoRepository.findOne({
      where: { id: id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} activityLevel`;
  }
}
