import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, EventEmitter, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
export declare class IonRouterOutlet implements OnDestroy, OnInit {
    private parentContexts;
    private location;
    private resolver;
    private changeDetector;
    private activated;
    private _activatedRoute;
    private name;
    private views;
    activateEvents: EventEmitter<any>;
    deactivateEvents: EventEmitter<any>;
    constructor(parentContexts: ChildrenOutletContexts, location: ViewContainerRef, resolver: ComponentFactoryResolver, name: string, changeDetector: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    readonly isActivated: boolean;
    readonly component: Object;
    readonly activatedRoute: ActivatedRoute;
    readonly activatedRouteData: {
        [name: string]: any;
    };
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach(): ComponentRef<any>;
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(ref: ComponentRef<any>, activatedRoute: ActivatedRoute): void;
    deactivate(): void;
    activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver | null): void;
}
