// -------- JA Sprint 1 - MVP --------
// --------- Buddhi Hasanka ----------

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "environments/environment.prod";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class SurveyService {
  surveyApiUrl: string = environment.surveyApiURL;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  };

  constructor(private http: HttpClient) {}

  getAnswerTemplates(): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + "answer-templates/")
      .pipe(catchError(this.handleError));
  }

  addNewAnsTemplate(templateObj, items): Observable<any> {
    return this.http
      .post<any>(
        this.surveyApiUrl + "answer-templates/",
        templateObj
      )
      .pipe(
        map(data => {
          items.unshift(data.content);
          return items.slice();
        }),
        catchError(this.handleError)
      );
  }

  updateAnsTemplate(id, item) {
    return this.http
      .put<any>(this.surveyApiUrl + "answer-templates/" + id, item)
      .pipe(catchError(this.handleError));
  }

  getAnsTemplateById(id, items?): Observable<any> {
    console.log("by id url : " + this.surveyApiUrl + "answer-templates/" + id);
    return this.http
      .get<any>(this.surveyApiUrl + "answer-templates/" + id)
      .pipe(
        map(data => {
          console.log(data.content);
          return data.content;
        }),
        catchError(this.handleError)
      );
  }

  removeAnsTemplate(row, items): Observable<any> {
    return this.http
      .delete(this.surveyApiUrl + "answer-templates/" + row.id)
      .pipe(
        map(data => {
          let i = items.indexOf(row);
          items.splice(i, 1);
          return items;
        }),
        catchError(this.handleError)
      );
  }

  addNewSurvey(surveyObj, items): Observable<any> {
    return this.http.post<any>(this.surveyApiUrl + "surveys", surveyObj).pipe(
      map(data => {
        items.unshift(data.content);
        return items.slice();
      }),
      catchError(this.handleError)
    );
  }

  updateSurveyWithQuestions(id, item) {
    console.log("update with ques : " + this.surveyApiUrl + "surveys/" + id);
    return this.http
      .put<any>(this.surveyApiUrl + "surveys/" + id, item)
      .pipe(catchError(this.handleError));
  }

  updateSurveyPopup(id, item): Observable<any> {
    return this.http
      .put<any>(this.surveyApiUrl + "surveys/" + id, item)
      .pipe(catchError(this.handleError));
  }

  getAllSurveys(): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + "surveys")
      .pipe(catchError(this.handleError));
  }

  // --------- BH ----------
  getPageSurveys(pageNumber,pageSize): Observable<any> {
    return this.http
      .get(this.surveyApiUrl + "surveys?pageNumber="+pageNumber+"&pageSize="+pageSize)
      .pipe(catchError(this.handleError));
  }
  // --------- BH ----------

  removeSurvey(row, items): Observable<any> {
    return this.http.delete(this.surveyApiUrl + "surveys/" + row.id).pipe(
      map(data => {
        let i = items.indexOf(row);
        items.splice(i, 1);
        return items;
      }),
      catchError(this.handleError)
    );
  }

  getQuestionById(questionId): any {
    return this.http
      .get<any>(this.surveyApiUrl + "questions/" + questionId)
      .pipe(
        map(response => {
          return response.content;
        }),
        catchError(this.handleError)
      );
  }

  getSurveyById(surveyId) {
    return this.http.get<any>(this.surveyApiUrl + "surveys/" + surveyId).pipe(
      map(response => {
        return response.content;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse | any) {
    //console.log(error)
    return throwError(error);
  }
}
