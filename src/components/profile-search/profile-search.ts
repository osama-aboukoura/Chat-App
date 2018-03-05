import { Component } from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {Profile} from "../../models/profile/profile";
import {Pro} from "@ionic/pro";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;

  // profileList: Profile[];
  public groupMeetingFB$: Observable<Profile[]>;

  constructor(private data: DataProvider) {

  }
  //
  // searchUser(query: string){
  //   this.data.searchUser(query).subscribe(profiles => {
  //     this.profileList = profiles as Profile[];
  //     console.log(this.profileList);
  //   })
  // }

  // searchUser(query: string){
  //   this.data.searchUser(query).subscribe(profiles => {
  //     console.log("profiles:")
  //     console.log(profiles);
  //   })
  // }

  searchUser(event){
    this.groupMeetingFB$ = this.data
      .searchUser(this.query) // db list
      .snapshotChanges() // key,value pairs
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

    console.log("groupMeetingFB$");
    console.log(this.groupMeetingFB$);
  }
}
