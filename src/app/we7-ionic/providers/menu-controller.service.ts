import { Injectable } from '@angular/core';
import { proxyMethod } from '../util/util';

const CTRL = 'ion-menu-controller';
@Injectable()
export class MenuController {
  open(menuId?: string): Promise<boolean> {
    return proxyMethod(CTRL, 'open', menuId);
  }
  close(menuId?: string): Promise<boolean> {
    return proxyMethod(CTRL, 'close', menuId);
  }
  toggle(menuId?: string): Promise<boolean> {
    return proxyMethod(CTRL, 'toggle', menuId);
  }
  enable(shouldEnable: boolean, menuId?: string): Promise<HTMLIonMenuElement> {
    return proxyMethod(CTRL, 'enable', shouldEnable, menuId);
  }
  swipeEnable(shouldEnable: boolean, menuId?: string): Promise<HTMLIonMenuElement> {
    return proxyMethod(CTRL, 'swipeEnable', shouldEnable, menuId);
  }
  isOpen(menuId?: string): Promise<boolean> {
    return proxyMethod(CTRL, 'isOpen', menuId);
  }
  isEnabled(menuId?: string): Promise<boolean> {
    return proxyMethod(CTRL, 'isEnabled', menuId);
  }
  get(menuId?: string): Promise<HTMLIonMenuElement> {
    return proxyMethod(CTRL, 'get', menuId);
  }
  getOpen(): Promise<HTMLIonMenuElement> {
    return proxyMethod(CTRL, 'getOpen');
  }
  getMenus(): Promise<HTMLIonMenuElement[]> {
    return proxyMethod(CTRL, 'getMenus');
  }
}
