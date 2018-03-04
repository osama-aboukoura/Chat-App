import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Account} from "../../models/account/account.interface";
import {LoginResponse} from "../../models/login/login-response.interface";

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  async signInWithEmailAndPassword(account: Account){
    try {
      return <LoginResponse> {
        result: await this.angularFireAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }
    catch (e) {
      return <LoginResponse> {
        error: e
      }
    }
  }

}
