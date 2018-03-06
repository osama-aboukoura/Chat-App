import {Component, EventEmitter, Output} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {Profile} from "../../models/profile/profile";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;

  // profileList: Profile[];
  public profileList: Observable<Profile[]>;

  @Output() selectedProfile: EventEmitter<Profile>;

  constructor(private data: DataProvider) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  searchUser(event){
    this.profileList = this.data
      .searchUser(this.query) // db list
      .snapshotChanges() // key,value pairs
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

    console.log("profileList");
    console.log(this.profileList);
  }

  selectProfile(profile: Profile){
    this.selectedProfile.emit(profile);
  }
}
