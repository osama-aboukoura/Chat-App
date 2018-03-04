import {Profile} from "../../models/profile/profile";

const userList: Profile[] = [
  { firstName: "Osama", lastName: "Aboukoura", avatar: "assets/imgs/avatar-male.png", email: "Osama@aboukoura.com", dateOfBirth: new Date() },
  { firstName: "Reem", lastName: "Aboukoura", avatar: "assets/imgs/avatar-female.png", email: "reem@aboukoura.com", dateOfBirth: new Date() },
  { firstName: "Baha", lastName: "Safadi", avatar: "assets/imgs/avatar-male.png", email: "Baha@Safadi.com", dateOfBirth: new Date() },
  { firstName: "Judi", lastName: "Safadi", avatar: "assets/imgs/avatar-female.png", email: "Judi@Safadi.com", dateOfBirth: new Date() }
];

export const USER_LIST = userList;
