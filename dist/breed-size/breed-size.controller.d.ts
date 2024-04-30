import { BreedSizeService } from './breed-size.service';
import { CreateBreedSizeDto } from './dto/create-breed-size.dto';
export declare class BreedSizeController {
    private readonly breedSizeService;
    constructor(breedSizeService: BreedSizeService);
    create(createBreedSizeDto: CreateBreedSizeDto): Promise<import("../core/interface/GenericQueryRersponse").QueryResponse>;
    findAll(): Promise<import("./entities/breed-size.entity").BreedSizeEntity[]>;
    findOne(id: string): Promise<import("./entities/breed-size.entity").BreedSizeEntity>;
}
