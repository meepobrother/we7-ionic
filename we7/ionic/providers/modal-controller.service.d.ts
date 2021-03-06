import { ComponentFactoryResolver, Injector } from '@angular/core';
import { ModalOptions } from '@ionic/core';
import { OverlayBaseController } from '../util/overlay';
import { AngularDelegate } from './angular-delegate.service';
export declare class ModalController extends OverlayBaseController<ModalOptions, HTMLIonModalElement> {
    private cfr;
    private injector;
    private angularDelegate;
    constructor(cfr: ComponentFactoryResolver, injector: Injector, angularDelegate: AngularDelegate);
    create(opts?: ModalOptions): Promise<HTMLIonModalElement>;
}
