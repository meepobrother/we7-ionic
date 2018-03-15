import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { VirtualItem } from './virtual-item.directive';
import { VirtualHeader } from './virtual-header.directive';
import { VirtualFooter } from './virtual-footer.directive';
export declare class VirtualScroll {
    private el;
    cd: ChangeDetectorRef;
    itmTmp: VirtualItem;
    hdrTmp: VirtualHeader;
    ftrTmp: VirtualFooter;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    private itemRender(el, cell, index?);
    private getComponent(type);
}
