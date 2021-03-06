import { ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { FrameworkDelegate } from '@ionic/core';
export declare class AngularDelegate {
    private appRef;
    constructor(appRef: ApplicationRef);
    create(cfr: ComponentFactoryResolver, injector: Injector): AngularFrameworkDelegate;
}
export declare class AngularFrameworkDelegate implements FrameworkDelegate {
    private cfr;
    private injector;
    private appRef;
    private elRefMap;
    constructor(cfr: ComponentFactoryResolver, injector: Injector, appRef: ApplicationRef);
    attachViewToDom(container: any, component: any, data?: any, cssClasses?: string[]): Promise<any>;
    removeViewFromDom(_container: any, component: any): Promise<void>;
}
