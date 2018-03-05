import {Component, OnInit, Output, EventEmitter} from '@angular/core';
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
  private loader: Loading;

  userProfile: Profile;

  @Output() existingProfile: EventEmitter<Profile>;

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
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss();
      })
    })
  }

  constructor(private loadingController: LoadingController,
              private data: DataProvider,
              private auth: AuthProvider)
  {
    this.existingProfile = new EventEmitter<Profile>();

    this.loader = this.loadingController.create({
      content: "Loading profile..."
    });
  }

}
