// -------- JA Sprint 1 - MVP --------
// --------- Buddhi Hasanka ----------

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { environment } from "environments/environment.prod";
import { Observable, throwError } from "rxjs";

@Injectable()
export class EvoteService {
  surveyApiUrl: string = environment.surveyApiURL + "evotes/";
  populateVoterUrl: string = environment.surveyApiURL + "voters";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  };
  constructor(private http: HttpClient) {}

  getAllEvotesSuggestions(): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + "suggestions")
      .pipe(catchError(this.handleError));
  }

  getAllEvotes(): Observable<any> {
    return this.http.get(this.surveyApiUrl).pipe(catchError(this.handleError));
  }

  // --------- BH ----------
  getPageEvotes(pageNumber,pageSize): Observable<any> {
    return this.http.get(this.surveyApiUrl+"?pageNumber="+pageNumber+"&pageSize="+pageSize).pipe(catchError(this.handleError));
  }
  // --------- BH ----------

  removeEvotes(row, items): Observable<any> {
    return this.http.delete(this.surveyApiUrl + row.id).pipe(
      // map(data => {
      //   console.log(items);
      //   let i = items.indexOf(row);
      //   console.log('I : ' + i);
      //   items.splice(i, 1);
      //   return items;
      // }),
      catchError(this.handleError)
    );
  }

  addEvote(evoteObj, items): Observable<any> {

    return this.http.post<any>(this.surveyApiUrl, evoteObj).pipe(
      map(data => {
        items.unshift(data.content);
        return items.slice();
      }),
      catchError(this.handleError)
    );
  }

  updateEvote(id, item) {
    return this.http
      .put<any>(this.surveyApiUrl + id, item)
      .pipe(catchError(this.handleError));
  }

  populateVoters(voteObj): Observable<any> {
    return this.http
      .post<any>(this.populateVoterUrl, voteObj)
      .pipe(catchError(this.handleError));
  }

  getEvoteById(evoteId): Observable<any> {
    return this.http
      .get<any>(this.surveyApiUrl + evoteId)
      .pipe(catchError(this.handleError));
  }

  getEvoteDetails(evoteId){
    return this.http
    .get<any>(environment.surveyApiURL+ "eVoterDetails/"+evoteId)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
