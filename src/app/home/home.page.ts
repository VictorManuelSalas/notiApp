import { Component } from '@angular/core';
import { PushService } from '../services/push.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public pushService: PushService) {
   // localStorage.setItem('noti', 'info');
   // pushService.infoLocal = localStorage.getItem('noti');
  }

  
}
