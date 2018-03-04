import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth'
import { Account } from '../../models/account/account.interface'
import { ToastController } from 'ionic-angular'

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  constructor(private navCtrl: NavController,
              private afAuth: AngularFireAuth,
              private toastController: ToastController)
  {
    console.log('Hello RegisterFormComponent Component');
  }

  async register(account){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toastController.create({
        message: "Account successfully created",
        duration: 3000
      }).present();
      console.log(result);
    }
    catch (e) {
      console.error(e);
      this.toastController.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }
}
