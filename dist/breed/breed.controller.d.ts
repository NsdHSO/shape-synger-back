import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
export declare class BreedController {
    private readonly breedService;
    constructor(breedService: BreedService);
    create(createBreedDto: CreateBreedDto): Promise<import("../core/interface/GenericQueryRersponse").QueryResponse>;
    findAll(): Promise<import("./entities/breed.entity").BreedEntity[]>;
    findOne(id: string): Promise<import("./entities/breed.entity").BreedEntity>;
    update(id: string, updateBreedDto: UpdateBreedDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
