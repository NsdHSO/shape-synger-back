import { MongoRepository } from 'typeorm';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { BreedEntity } from './entities/breed.entity';
import { QueryResponse } from '../core/interface/GenericQueryRersponse';
export declare class BreedService {
    private breedEntityMongoRepository;
    constructor(breedEntityMongoRepository: MongoRepository<BreedEntity>);
    create(createBreedDto: CreateBreedDto): Promise<QueryResponse>;
    findAll(): Promise<BreedEntity[]>;
    findOne(id: number): Promise<BreedEntity>;
    update(id: number, updateBreedDto: UpdateBreedDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
