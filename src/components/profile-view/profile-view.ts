import {Component, OnInit} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {AuthProvider} from "../../providers/auth/auth";
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profile";
import {LoadingController, Loading} from "ionic-angular";

@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit{

  // holds the loading message shown while retrieving from firebase
  loader: Loading;

  userProfile: Profile;

  /**
   * components don't work with ionViewDidLoad
   * retrieving the profile from the logged-in user's id
   */
  ngOnInit(): void {
    this.loader.present();

    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user)
        .snapshotChanges()
        .subscribe(profile => {
        this.userProfile = <Profile>profile.payload.val();
        this.loader.dismiss();
      })
    })
  }

  constructor(private loadingController: LoadingController,
              private data: DataProvider,
              private auth: AuthProvider)
  {
    this.loader = this.loadingController.create({
      content: "Loading profile..."
    });
  }

}
