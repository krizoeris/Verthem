
import { CampaignDomain }  from '../Campaign/CampaignDomain';
import { User }  from '../User/User';

export interface Campaign {
    id: number;
    name: string;
    user: User;
    domain: CampaignDomain;
    status: 'draft | saved | live | deleted';
    created_at: number;
    updated_at: number;
}