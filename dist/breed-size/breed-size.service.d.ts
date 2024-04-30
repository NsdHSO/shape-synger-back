import { Repository } from 'typeorm';
import { CreateBreedSizeDto } from './dto/create-breed-size.dto';
import { BreedSizeEntity } from './entities/breed-size.entity';
import { QueryResponse } from '../core/interface/GenericQueryRersponse';
export declare class BreedSizeService {
    private breedSizeEntityMongoRepository;
    constructor(breedSizeEntityMongoRepository: Repository<BreedSizeEntity>);
    create(createBreedSizeDto: CreateBreedSizeDto): Promise<QueryResponse>;
    findAll(): Promise<BreedSizeEntity[]>;
    findOne(id: number): Promise<BreedSizeEntity>;
    remove(id: number): string;
}
