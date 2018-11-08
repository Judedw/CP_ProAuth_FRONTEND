import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CpUsersDB } from "../../shared/fake-db/cp-users";

@Injectable()
export class UserService {
  users: any[];

  constructor(private http: HttpClient) {
    const user: CpUsersDB = new CpUsersDB();
    this.users = user.users;
  }

  login(signinFormData): boolean {
    console.log(this.users);
    let currentUser = this.users.filter(user => {
      return (
        user.user_name === signinFormData.username &&
        user.password === signinFormData.password
      );
    });
    console.log("current log users" + currentUser);
    if (currentUser.length > 0) {
      console.log(currentUser);

      let loggedUser = currentUser[0];

      let userToken = {
        id: loggedUser.id,
        username: loggedUser.user_name,
        profilename: loggedUser.profile_name,
        image: loggedUser.image,
        token: "fake-logged-user",
        company: loggedUser.company,
        position: loggedUser.position
      };

      localStorage.setItem("currentUser", JSON.stringify(userToken));

      return true;
    } else {
      return false;
    }
  }

  signup(signupFormData) {

    let userToken = {
      id: this.users.length++,
      username: signupFormData.email,
      profilename: "profile_name",
      password: signupFormData.password,
      image: "",
      token: "fake-logged-user",
      company: "company",
      position: "position"
    };
    console.log("user" + userToken);

    // save data here

    localStorage.setItem("currentUser", JSON.stringify(userToken));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}
