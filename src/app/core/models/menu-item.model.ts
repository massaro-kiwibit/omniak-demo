export interface MenuItem {
    name: string;
    icon?: string;
    path?: string;
    children?: MenuItem[];
    mobile?: boolean;
}