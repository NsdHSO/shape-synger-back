import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { MongoRepository } from 'typeorm';

import { CreateBreedSizeDto } from './dto/create-breed-size.dto';

import { BreedSizeEntity } from './entities/breed-size.entity';
import {
  QueryResponse,
  QueryStatusMessage,
} from '../core/interface/GenericQueryRersponse';

@Injectable()
export class BreedSizeService {
  constructor(
    @InjectRepository(BreedSizeEntity)
    private breedSizeEntityMongoRepository: MongoRepository<BreedSizeEntity>,
  ) {}

  async create(createBreedSizeDto: CreateBreedSizeDto) {
    if (
      typeof createBreedSizeDto.size !== 'string' ||
      !['small', 'medium', 'large'].includes(createBreedSizeDto.size)
    ) {
      throw new BadRequestException(
        'Invalid activity level',
        "'small', 'medium', 'large'",
      );
    }
    const breedSizeEntity = await this.breedSizeEntityMongoRepository.findOne({
      where: { size: createBreedSizeDto.size },
    });
    if (breedSizeEntity) {
      throw new ConflictException('Breed size with this value already exists');
    }

    return await this.breedSizeEntityMongoRepository
      .save({
        ...createBreedSizeDto,
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
    return await this.breedSizeEntityMongoRepository.find();
  }

  async findOne(id: number) {
    return await this.breedSizeEntityMongoRepository.findOne({
      where: { id: id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} breedSize`;
  }
}
