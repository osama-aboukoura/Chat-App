import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { Profile } from "../../models/profile/profile";
import { DataProvider } from "../../providers/data/data";
import { AuthProvider } from "../../providers/auth/auth";
import { User } from "firebase/app";

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnDestroy{

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  profile = {} as Profile;

  constructor(private data: DataProvider, private auth: AuthProvider) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile(){
    if (this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      console.log(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
