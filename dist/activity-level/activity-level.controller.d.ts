import { ActivityLevelService } from './activity-level.service';
import { CreateActivityLevelDto } from './dto/create-activity-level.dto';
export declare class ActivityLevelController {
    private readonly activityLevelService;
    constructor(activityLevelService: ActivityLevelService);
    create(createActivityLevelDto: CreateActivityLevelDto): Promise<import("../core/interface/GenericQueryRersponse").QueryResponse>;
    findAll(): Promise<import("./entities/activity-level.entity").ActivityLevelEntity[]>;
    findOne(id: string): Promise<import("./entities/activity-level.entity").ActivityLevelEntity>;
}
