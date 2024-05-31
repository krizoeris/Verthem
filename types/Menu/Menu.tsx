import { MenuItem } from './MenuItem';

export type Menu = {
    type: 'main' | 'account' | 'legal';
    accessibility: 'public' | 'private';
    items: MenuItem[];
};