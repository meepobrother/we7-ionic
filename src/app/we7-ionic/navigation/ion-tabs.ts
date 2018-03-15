import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Directive({
  selector: 'ion-tabs'
})
export class IonTabs {

  constructor(private router: Router) {}

  @HostListener('ionTabbarClick', ['$event'])
  ionTabbarClick(ev: UIEvent) {
    console.log('ionTabbarClick', ev);
    const tabElm: any = ev.detail as any;
    if (tabElm && tabElm.href) {
      console.log('tabElm', tabElm.href);
      this.router.navigateByUrl(tabElm.href);
    }
  }

}

