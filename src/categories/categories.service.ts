import { ConflictException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { MongoRepository } from 'typeorm';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UserEntity } from '../users/entities/user.entity';

import { CategoryEntity } from './entities/category.entity';
import {
  QueryResponse,
  QueryStatusMessage,
} from '../core/interface/GenericQueryRersponse';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryEntityRepository: MongoRepository<CategoryEntity>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {

    const existingCategory = await this.categoryEntityRepository.findOne({
      where: { value: createCategoryDto.value },
    });
    if (existingCategory) {
      throw new ConflictException('Category with this value already exists');
    }

    return await this.categoryEntityRepository
      .save({
        ...createCategoryDto,
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
    return await this.categoryEntityRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
