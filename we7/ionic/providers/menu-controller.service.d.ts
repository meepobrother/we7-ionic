export declare class MenuController {
    open(menuId?: string): Promise<boolean>;
    close(menuId?: string): Promise<boolean>;
    toggle(menuId?: string): Promise<boolean>;
    enable(shouldEnable: boolean, menuId?: string): Promise<HTMLIonMenuElement>;
    swipeEnable(shouldEnable: boolean, menuId?: string): Promise<HTMLIonMenuElement>;
    isOpen(menuId?: string): Promise<boolean>;
    isEnabled(menuId?: string): Promise<boolean>;
    get(menuId?: string): Promise<HTMLIonMenuElement>;
    getOpen(): Promise<HTMLIonMenuElement>;
    getMenus(): Promise<HTMLIonMenuElement[]>;
}
