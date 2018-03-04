import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth'
import { Account } from '../../models/account/account.interface'
import {LoginResponse} from "../../models/login/login-response.interface";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;

  @Output() loginStatus: EventEmitter<any>;

  constructor(private navCtrl:NavController,
              private afAuth: AngularFireAuth)
  {
    this.loginStatus = new EventEmitter<any>();
  }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

  async login(){
    try {
      const result:LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      };
      this.loginStatus.emit(result);

    } catch (e) {
      const error:LoginResponse = {
        error: e
      };
      this.loginStatus.emit(error)
    }
  }

}
