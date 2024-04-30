import { BreedService } from '../breed/breed.service';
export declare class OverviewService {
    private breedEntityMongoRepository;
    constructor(breedEntityMongoRepository: BreedService);
    findAll(): Promise<{
        title: string;
        cards: {
            title: string;
            superScript: number;
            icon: string;
            subTitle: string;
            color: string;
            component: string;
        }[];
    }[]>;
}
