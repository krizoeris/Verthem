
import { Template }  from '../Template/Template';

export interface CampaignPages {
    _id: number;
    title: string;
    template: Template;
    created_at: number;
    updated_at: number;
}