import { MongoRepository } from 'typeorm';
import { CreateActivityLevelDto } from './dto/create-activity-level.dto';
import { QueryResponse } from '../core/interface/GenericQueryRersponse';
import { ActivityLevelEntity } from './entities/activity-level.entity';
export declare class ActivityLevelService {
    private activityLevelDtoMongoRepository;
    constructor(activityLevelDtoMongoRepository: MongoRepository<ActivityLevelEntity>);
    create(createActivityLevelDto: CreateActivityLevelDto): Promise<QueryResponse>;
    findAll(): Promise<ActivityLevelEntity[]>;
    findOne(id: number): Promise<ActivityLevelEntity>;
    remove(id: number): string;
}
