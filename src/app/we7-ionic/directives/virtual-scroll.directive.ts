import { ChangeDetectorRef, ContentChild, Directive, ElementRef, EmbeddedViewRef } from '@angular/core';
import { VirtualItem } from './virtual-item.directive';
import { VirtualHeader } from './virtual-header.directive';
import { VirtualFooter } from './virtual-footer.directive';
import { VirtualContext } from './virtual-utils';

@Directive({
  selector: 'ion-virtual-scroll'
})
export class VirtualScroll {

  @ContentChild(VirtualItem) itmTmp: VirtualItem;
  @ContentChild(VirtualHeader) hdrTmp: VirtualHeader;
  @ContentChild(VirtualFooter) ftrTmp: VirtualFooter;

  constructor(
    private el: ElementRef,
    public cd: ChangeDetectorRef,
  ) {
    this.el.nativeElement.itemRender = this.itemRender.bind(this);
  }

  private itemRender(el: HTMLElement|null, cell: any, index?: number) {
    if (!el) {
      const node = this.itmTmp.viewContainer.createEmbeddedView(
        this.getComponent(cell.type),
        new VirtualContext(null, null, null),
        index
      );
      el = getElement(node);
      (el as any)['$ionView'] = node;
    }
    const node = (el as any)['$ionView'];
    const ctx = node.context;
    ctx.$implicit = cell.value;
    ctx.index = cell.index;
    node.detectChanges();
    return el;
  }

  private getComponent(type: number) {
    switch (type) {
      case 0: return this.itmTmp.templateRef;
      case 1: return this.hdrTmp.templateRef;
      case 2: return this.ftrTmp.templateRef;
    }
    return null;
  }
}

function getElement(view: EmbeddedViewRef<VirtualContext>): HTMLElement {
  const rootNodes = view.rootNodes;
  for (let i = 0; i < rootNodes.length; i++) {
    if (rootNodes[i].nodeType === 1) {
      return rootNodes[i];
    }
  }
  return null;
}
