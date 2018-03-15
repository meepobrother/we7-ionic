import { ComponentRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export declare function attachView(views: RouteView[], location: ViewContainerRef, ref: ComponentRef<any>, activatedRoute: ActivatedRoute): void;
export declare function initRouteViewElm(views: RouteView[], ref: ComponentRef<any>, activatedRoute: ActivatedRoute): void;
export declare function getExistingView(views: RouteView[], activatedRoute: ActivatedRoute): RouteView;
export declare function getLastDeactivatedRef(views: RouteView[]): ComponentRef<any>;
export declare function deactivateView(views: RouteView[], ref: ComponentRef<any>): void;
export declare function destoryViews(views: RouteView[]): void;
export interface RouteView {
    urlKey: string;
    ref: ComponentRef<any>;
    deactivatedId: number;
}
