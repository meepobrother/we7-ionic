import { Component } from '@angular/core';
import { AlertController } from './we7-ionic/providers/alert-controller.service';
import { AlertOptions } from '@ionic/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  disableInputs = false;
  radioValue = 'tripe';
  selectValue = 'brains';

  constructor(
    public alert: AlertController
  ) { }

  async onClick() {
    const option: AlertOptions = {
      message: 'message',
      title: 'title'
    };
    const alert = await this.alert.create(option);
    alert.present();
  }

  toggleFullscreen(content) {
    content.fullscreen = !content.fullscreen;
    console.log('content.fullscren =', content.fullscreen);
  }

  toggleDisplay(el) {
    el.style.display = !el.style.display ? 'none' : null;
  }

  toggleColor() {

  }
}
