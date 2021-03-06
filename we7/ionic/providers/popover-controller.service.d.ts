import { ComponentFactoryResolver, Injector } from '@angular/core';
import { PopoverOptions } from '@ionic/core';
import { OverlayBaseController } from '../util/overlay';
import { AngularDelegate } from './angular-delegate.service';
export declare class PopoverController extends OverlayBaseController<PopoverOptions, HTMLIonPopoverElement> {
    private cfr;
    private injector;
    private angularDelegate;
    constructor(cfr: ComponentFactoryResolver, injector: Injector, angularDelegate: AngularDelegate);
    create(opts?: PopoverOptions): Promise<HTMLIonPopoverElement>;
}
