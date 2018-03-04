import {User} from "../../models/user/user";

const userList: User[] = [
  { firstName: "Osama", lastName: "Aboukoura", avatar: "assets/imgs/avatar-male.png", email: "Osama@aboukoura.com" },
  { firstName: "Reem", lastName: "Aboukoura", avatar: "assets/imgs/avatar-female.png", email: "reem@aboukoura.com" },
  { firstName: "Baha", lastName: "Safadi", avatar: "assets/imgs/avatar-male.png", email: "Baha@Safadi.com" },
  { firstName: "Judi", lastName: "Safadi", avatar: "assets/imgs/avatar-female.png", email: "Judi@Safadi.com" }
];

export const USER_LIST = userList;
