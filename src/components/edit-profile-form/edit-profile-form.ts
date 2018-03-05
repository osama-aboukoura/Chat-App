import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { Profile } from "../../models/profile/profile";
import { DataProvider } from "../../providers/data/data";
import { AuthProvider } from "../../providers/auth/auth";
import { User } from "firebase/app";

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy{

  ngOnInit(): void {
    if (!this.profile){
      this.profile = {} as Profile;
    }
  }

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  @Input() profile: Profile;

  constructor(private data: DataProvider, private auth: AuthProvider) {
    this.saveProfileResult = new EventEmitter<boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile(){
    if (this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
