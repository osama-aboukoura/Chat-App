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
  public profileList: Observable<Profile[]>;

  constructor(private data: DataProvider) {

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
}
