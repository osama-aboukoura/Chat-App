import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database'
import { User } from "firebase/app";
import { Profile } from "../../models/profile/profile";
import 'rxjs/add/operator/take';

@Injectable()
export class DataProvider {

  profileObject: AngularFireObject<Profile>;

  profileList: AngularFireList<Profile>;

  constructor(private database: AngularFireDatabase) {
  }

  /**
   * checks whether the user has created a profile or not
   */
  getProfile(user: User){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    return this.profileObject;
  }

  async saveProfile(user: User, profile: Profile){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try {
      await this.profileObject.set(profile);
      return true;
    }
    catch (e) {
      console.error(e);
      return false;
    }
  }

  searchUser(firstName: string){

    return this.database.list('profiles', ref => ref.orderByChild('firstName').equalTo(firstName));

  }

  getAllUsers(){
    return this.database.list('profiles');
  }

}
