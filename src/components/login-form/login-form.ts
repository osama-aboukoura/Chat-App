import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from "ionic-angular";
import { Account } from '../../models/account/account.interface'
import {LoginResponse} from "../../models/login/login-response.interface";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;

  @Output() loginStatus: EventEmitter<any>;

  constructor(private navCtrl:NavController,
              private auth: AuthProvider)
  {
    this.loginStatus = new EventEmitter<any>();
  }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

  async login(){
    const result = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
  }

}
