import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { CpUsersDB } from "../../shared/fake-db/cp-users";
import { environment } from "environments/environment.prod";
import { map, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { AppErrorService } from "app/shared/services/app-error/app-error.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";

@Injectable()
export class UserService {
  private users: any[];
  userApiUrl: string = environment.productApiURL + "users/";

  constructor(
    private http: HttpClient,
    private loader: AppLoaderService,
    private errDialog: AppErrorService) {

    // const user: CpUsersDB = new CpUsersDB();
    // this.users = user.users;

    this.users = this.getAllUsers();
  }

  login(signinFormData): boolean {
    console.log(this.users);
    // let currentUser = this.users.filter(user => {
    //   return (
    //     user.user_name === signinFormData.username &&
    //     user.password === signinFormData.password
    //   );
    // });
    // console.log("current log users" + currentUser);
    // if (currentUser.length > 0) {
    //   console.log(currentUser);

    //   let loggedUser = currentUser[0];

    //   let userToken = {
    //     id: loggedUser.id,
    //     username: loggedUser.user_name,
    //     profilename: loggedUser.profile_name,
    //     image: loggedUser.image,
    //     token: "fake-logged-user",
    //     company: loggedUser.company,
    //     position: loggedUser.position
    //   };

    //   localStorage.setItem("currentUser", JSON.stringify(userToken));

    //   return true;
    // } else {
    //   return false;
    // }


    let currentUser = this.users.filter(user => {
      return (
        user.email === signinFormData.email &&
        user.password === signinFormData.password
      );
    });


    console.log("current log users" + currentUser);
    if (currentUser.length > 0) {
      console.log(currentUser);

      let loggedUser = currentUser[0];

      let userToken = {
        id: loggedUser.id,
        name: loggedUser.name,
        email: loggedUser.email,
        description: loggedUser.description,
        address_line1: loggedUser.address_line1,
        address_line2: loggedUser.address_line2,
        city: loggedUser.city,
        postal_code: loggedUser.postal_code,
        state: loggedUser.state,
        country: loggedUser.country
      };

      localStorage.setItem("currentUser", JSON.stringify(userToken));

      return true;
    } else {
      return false;
    }
  }


  signup(signupFormData): Observable<any> {
    return this.http.post<any>(this.userApiUrl, signupFormData)
      .pipe(
        map(response => {
          console.log(JSON.stringify(response));
          localStorage.setItem("currentUser", JSON.stringify(response.content));
          return response.content.id;
        }),
        catchError(this.handleError)
      );
  }

  updateAccountSetting(id, formData): Observable<any> {
    return this.http.post<any>(this.userApiUrl + id + "/AccountSetting", formData)
      .pipe(
        map(response => {
          console.log(JSON.stringify(response));
          localStorage.setItem("currentUser", JSON.stringify(response.content));
          return response.content.id;
        }),
        catchError(this.handleError)
      );
  }

  updatePasswordSetting(id, formData): Observable<any> {

    return this.http.post<any>(this.userApiUrl + id + "/PasswordSetting", formData)
      .pipe(
        map(response => {
          console.log(JSON.stringify(response));
          localStorage.setItem("currentUser", JSON.stringify(response.content));
          return response.content.id;
        }),
        catchError(this.handleError)
      );


  }


  getAllUsers(): any {
    
    this.http.get<any>(this.userApiUrl + "list").pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
    ).subscribe(successResp => {
      this.users = successResp.content;
      console.log(successResp);

      return successResp;
    },
      error => {
        this.loader.close();
        console.log(error);
        console.log(error.status);
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }

  getUser(): Observable<any> {
    return this.http
      .get<any>(this.userApiUrl + JSON.parse(localStorage.getItem("currentUser")).id)
      .pipe(catchError(this.handleError));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }


  private handleError(error: HttpErrorResponse | any) {
    console.log(error)
    return throwError(error);
  }
}
