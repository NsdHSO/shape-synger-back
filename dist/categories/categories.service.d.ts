import { MongoRepository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { QueryResponse } from '../core/interface/GenericQueryRersponse';
export declare class CategoriesService {
    private categoryEntityRepository;
    constructor(categoryEntityRepository: MongoRepository<CategoryEntity>);
    create(createCategoryDto: CreateCategoryDto): Promise<QueryResponse>;
    findAll(): Promise<CategoryEntity[]>;
    findOne(id: number): string;
    update(id: number, updateCategoryDto: UpdateCategoryDto): string;
    remove(id: number): string;
}
