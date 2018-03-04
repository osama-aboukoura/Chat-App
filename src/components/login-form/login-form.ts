import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth'
import { Account } from '../../models/account/account.interface'

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;

  constructor(private navCtrl:NavController,
              private afAuth: AngularFireAuth) {
    console.log('Hello LoginFormComponent Component');
  }

  navigateToPage(pageName: string){
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName);
  }

  async login(){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log(result);

    } catch (e) {
      console.error(e);
    }
  }

}