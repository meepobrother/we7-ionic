import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController } from './providers/alert-controller.service';
import { ActionSheetController } from './providers/action-sheet-controller.service';
import { Events, setupProvideEvents } from './providers/events.service';
import { LoadingController } from './providers/loading-controller.service';
import { PickerController } from './providers/picker-controller.service';
import { MenuController } from './providers/menu-controller.service';
import { Platform } from './providers/platform.service';
import { ToastController } from './providers/toast-controller.service';
import { ModalController } from './providers/modal-controller.service';
import { AngularDelegate } from './providers/angular-delegate.service';

// directives
import { VirtualFooter } from './directives/virtual-footer.directive';
import { VirtualScroll } from './directives/virtual-scroll.directive';
import { VirtualHeader } from './directives/virtual-header.directive';
import { VirtualItem } from './directives/virtual-item.directive';

import { BooleanValueAccessor } from './control-value-accessors/boolean-value-accessor';
import { NumericValueAccessor } from './control-value-accessors/numeric-value-accesssor';
import { RadioValueAccessor } from './control-value-accessors/radio-value-accessor';
import { SelectValueAccessor } from './control-value-accessors/select-value-accessor';
import { TextValueAccessor } from './control-value-accessors/text-value-accessor';

import { IonNav } from './navigation/ion-nav';
import { IonRouterOutlet } from './navigation/ion-router-outlet';
import { IonTab } from './navigation/ion-tab';
import { IonTabs } from './navigation/ion-tabs';

export const declarations = [
  VirtualFooter, VirtualScroll, VirtualHeader, VirtualItem,
  BooleanValueAccessor, NumericValueAccessor, RadioValueAccessor,
  SelectValueAccessor, TextValueAccessor,
  IonNav, IonRouterOutlet, IonTab, IonTabs
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...declarations
  ],
  exports: [
    ...declarations
  ]
})
export class We7IonicModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: We7IonicModule,
      providers: [
        AlertController,
        ActionSheetController,
        Events,
        LoadingController,
        PickerController,
        MenuController,
        Platform,
        ToastController,
        ModalController,
        AngularDelegate,
        { provide: APP_INITIALIZER, useFactory: setupProvideEvents, multi: true },
      ]
    }
  }
}
