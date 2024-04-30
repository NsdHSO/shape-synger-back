import { OverviewService } from './overview.service';
export declare class OverviewController {
    private readonly overviewService;
    constructor(overviewService: OverviewService);
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
