import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import OneSignal from 'onesignal-cordova-plugin';
import { PushService } from './services/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(plataform: Platform, private pushService: PushService) {
    plataform.ready().then(() => {
      this.pushService.OneSignalInit();
    })
  }

}
 