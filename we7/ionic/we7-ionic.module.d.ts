import { ModuleWithProviders } from '@angular/core';
import { VirtualFooter } from './directives/virtual-footer.directive';
import { VirtualScroll } from './directives/virtual-scroll.directive';
import { VirtualItem } from './directives/virtual-item.directive';
import { BooleanValueAccessor } from './control-value-accessors/boolean-value-accessor';
import { NumericValueAccessor } from './control-value-accessors/numeric-value-accesssor';
import { RadioValueAccessor } from './control-value-accessors/radio-value-accessor';
import { SelectValueAccessor } from './control-value-accessors/select-value-accessor';
import { TextValueAccessor } from './control-value-accessors/text-value-accessor';
import { IonNav } from './navigation/ion-nav';
import { IonRouterOutlet } from './navigation/ion-router-outlet';
import { IonTab } from './navigation/ion-tab';
export declare const declarations: (typeof VirtualFooter | typeof VirtualItem | typeof VirtualScroll | typeof BooleanValueAccessor | typeof NumericValueAccessor | typeof RadioValueAccessor | typeof SelectValueAccessor | typeof TextValueAccessor | typeof IonNav | typeof IonRouterOutlet | typeof IonTab)[];
export declare class We7IonicModule {
    static forRoot(): ModuleWithProviders;
}
