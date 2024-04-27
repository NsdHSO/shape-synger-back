import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { MongoRepository } from 'typeorm';

import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

import { BreedEntity } from './entities/breed.entity';
import { ErrorMessage, QueryResponse, QueryStatusMessage } from '../core/interface/GenericQueryRersponse';
import { levelStadium, sizeStadium } from '../core/array';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(BreedEntity)
    private breedEntityMongoRepository: MongoRepository<BreedEntity>,
  ) {}

  async create(createBreedDto: CreateBreedDto) {
    return await this.breedEntityMongoRepository
      .save({
        ...createBreedDto,
        created_at: new Date(),
      })
      .then(
        () =>
          ({
            message: QueryStatusMessage.DATA_SAVED_SUCCESSFULLY,
            code: 200,
          }) as QueryResponse,
      )
      .catch((error) => {
        throw {
          message: ErrorMessage.BAD_REQUEST,
          code: error.statusCode,
        } as QueryResponse;
      });
  }

  async findAll() {
    return await this.breedEntityMongoRepository.find();
  }

  async findOne(id: number) {
    return await this.breedEntityMongoRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    const breed = await this.breedEntityMongoRepository.findOne({
      where: { id: id },
    });
    if (!breed) {
      throw new NotFoundException(`Breed with ID ${id} not found`);
    }
    const updates: any = {};
    if (updateBreedDto.name) {
      updates.name = updateBreedDto.name;
    }
    if (updateBreedDto.description) {
      updates.description = updateBreedDto.description;
    }
    if (updateBreedDto.origin) {
      updates.origin = updateBreedDto.origin;
    }
    if (updateBreedDto.breedSize) {
      const breedSizeId = sizeStadium.indexOf(updateBreedDto.breedSize) + 1;
      updates.breedSize = breedSizeId;
    }
    if (updateBreedDto.energyLevel) {
      const energyLevelId =
        levelStadium.indexOf(updateBreedDto.energyLevel) + 1;
      updates.energyLevel = energyLevelId;
    }
    if (updateBreedDto.groomingNeeds) {
      const groomingNeedsId =
        levelStadium.indexOf(updateBreedDto.groomingNeeds) + 1;
      updates.groomingNeeds = groomingNeedsId;
    }
    if (updateBreedDto.exerciseNeeds) {
      const exerciseNeedsId =
        levelStadium.indexOf(updateBreedDto.exerciseNeeds) + 1;
      updates.exerciseNeeds = exerciseNeedsId;
    }
    if (updateBreedDto.temperament) {
      updates.temperament = updateBreedDto.temperament;
    }
    if (updateBreedDto.healthIssues) {
      updates.healthIssues = updateBreedDto.healthIssues;
    }
    return await this.breedEntityMongoRepository.update(id, updates);
  }
  remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
