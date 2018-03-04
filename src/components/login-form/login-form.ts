import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  constructor(private navCtrl:NavController) {
    console.log('Hello LoginFormComponent Component');
  }

  navigateToPage(pageName: string){
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName);
  }

}
