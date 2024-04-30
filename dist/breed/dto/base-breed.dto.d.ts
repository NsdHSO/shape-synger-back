import { ActivityLevelType, SizeType } from '../../core/type';
export declare class BaseBreedDto {
    id: number;
    name: string;
    description: string;
    origin: string;
    age: number;
    breedSize: SizeType;
    energyLevel: ActivityLevelType;
    groomingNeeds: ActivityLevelType;
    exerciseNeeds: ActivityLevelType;
    temperament: string[];
    healthIssues: string[];
}
