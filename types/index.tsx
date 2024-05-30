import * as UserTypes from './User';
import * as CampaignTypes from './Campaign';
import * as TemplateTypes from './Template';
import * as MenuTypes from './Menu';

declare global {
    namespace Global {
        export import User = UserTypes;
        export import Campaign = CampaignTypes;
        export import Template = TemplateTypes;
        export import Menu = MenuTypes;
    }
}

export {};