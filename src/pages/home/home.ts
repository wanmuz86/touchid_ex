import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
  	public touchId: TouchID) {

  }
openTouchId(){
this.touchId.isAvailable()
  .then(
    res => {
    	this.touchId.verifyFingerprint('Scan your fingerprint please')
  .then(
    res => console.log('Ok', res),
    err => console.error('Error', err)
  );
    },
    err => console.error('TouchID is not available', err)
  );


}
}
