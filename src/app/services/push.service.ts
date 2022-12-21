import { Injectable } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  //Objetos de mensajes
  mensajes: any[] = [
    {
      title: 'Titulo de la notificacion PUSH',
      body: 'Este es el body de la notificacion push',
      date: new Date()
    }
  ]

  id_onesignal = '8d1620a0-bc08-4ab2-9a79-3ffb5aee82a6';
  constructor() { }

  
  // Call this function when your app starts
  OneSignalInit() {
    // Uncomment to set OneSignal device logging to VERBOSE  
    // OneSignal.setLogLevel(6, 0);

    // NOTE: Update the setAppId value below with your OneSignal AppId.
    OneSignal.setAppId(this.id_onesignal);
    OneSignal.setNotificationOpenedHandler(function (jsonData) {
      let data = JSON.stringify(jsonData);
      console.log('notificationOpenedCallback: ' + data);
    
    });

    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
      console.log("User accepted notifications: " + accepted);
    });


  }

  
  async notificacionRecibida(data: any) {
    const payload = data.payload;

    const existPush = this.mensajes.find(mensaje => mensaje.notificacionID = payload.notificacionID)

    if (existPush){
      return;
    }

    this.mensajes.unshift(payload);
  }


}

