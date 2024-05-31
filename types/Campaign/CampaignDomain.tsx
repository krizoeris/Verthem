export interface CampaignDomain {
    _id: number;
    name: string;
    created_at: number;
    updated_at: number;
    status: 'active' | 'inactive';
}