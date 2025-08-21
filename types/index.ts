import * as UserTypes from "./user";
import * as CampaignTypes from "./campaign";
import * as TemplateTypes from "./template";
import * as MenuTypes from "./menu";
import * as PropTypes from "./props";

declare global {
  namespace Global {
    export import User = UserTypes;
    export import Campaign = CampaignTypes;
    export import Template = TemplateTypes;
    export import Menu = MenuTypes;
    export import Props = PropTypes;
  }
}

export {};
