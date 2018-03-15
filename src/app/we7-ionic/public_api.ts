export { We7IonicModule } from './we7-ionic.module';

/* Navigation */
export { IonNav } from './navigation/ion-nav';
export { IonRouterOutlet } from './navigation/ion-router-outlet';
export { IonTab } from './navigation/ion-tab';
export { IonTabs } from './navigation/ion-tabs';
/* Directives */
export { VirtualScroll } from './directives/virtual-scroll.directive';
export { VirtualItem } from './directives/virtual-item.directive';
export { VirtualHeader } from './directives/virtual-header.directive';
export { VirtualFooter } from './directives/virtual-footer.directive';
/* Providers */
export { AngularDelegate } from './providers/angular-delegate.service';
export { ActionSheetController } from './providers/action-sheet-controller.service';
export { AlertController } from './providers/alert-controller.service';
export { Events } from './providers/events.service';
export { LoadingController } from './providers/loading-controller.service';
export { MenuController } from './providers/menu-controller.service';
export { PickerController } from './providers/picker-controller.service';
export { ModalController } from './providers/modal-controller.service';
export { Platform } from './providers/platform.service';
export { PopoverController } from './providers/popover-controller.service';
export { ToastController } from './providers/toast-controller.service';
export * from './types/interfaces';
import { IonicWindow } from './types/interfaces';
const win = (window as IonicWindow);
const Ionic = win.Ionic;
if (Ionic) {
  Ionic.ael = function ngAddEventListener(elm, eventName, cb, opts) {
    if (elm.__zone_symbol__addEventListener) {
      elm.__zone_symbol__addEventListener(eventName, cb, opts);
    } else {
      elm.addEventListener(eventName, cb, opts);
    }
  };
  Ionic.rel = function ngRemoveEventListener(elm, eventName, cb, opts) {
    if (elm.__zone_symbol__removeEventListener) {
      elm.__zone_symbol__removeEventListener(eventName, cb, opts);
    } else {
      elm.removeEventListener(eventName, cb, opts);
    }
  };
  Ionic.raf = function ngRequestAnimationFrame(cb: any) {
    if (win.__zone_symbol__requestAnimationFrame) {
      win.__zone_symbol__requestAnimationFrame(cb);
    } else {
      win.requestAnimationFrame(cb);
    }
  };
}
