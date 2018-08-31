import { Injectable } from "@angular/core";
import { UserDB } from "../../shared/fake-db/users";
import { Observable, of } from "rxjs";
import { catchError, map ,tap} from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "../../../../node_modules/@angular/common/http";
import { environment } from "environments/environment.prod";
import { _throw } from "rxjs/Observable/throw";
import { Clients,Content } from "../../model/ClientModel.model";

@Injectable()
export class CrudService {
  clientApiUrl: string = environment.baseApiURL + "clients/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.clientApiUrl).pipe(catchError(this.handleError));
  }

  getClientSuggestions(): Observable<any> {
    return this.http
      .get<string>(this.clientApiUrl + "suggestions")
      .pipe(catchError(this.handleError));
  }

  addItem(item, items: any[]): Observable<any> {
    return this.http.post<any>(this.clientApiUrl, item, this.httpOptions).pipe(
      map(data => {
        items.unshift(data.content);
        return items.slice();
      }),
      catchError(this.handleError)
    );
  }

  updateItem(id, item): Observable<any> {
    return this.http
      .put<any>(this.clientApiUrl + id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  removeItem(id): Observable<any> {
    return this.http
      .delete(this.clientApiUrl + id)
      .pipe(catchError(this.handleError));
  }

  search(filter:{name:string} = {name:''},page=1):Observable<Clients>{
    return this.http.get<Clients>(this.clientApiUrl+'suggestions')
    .pipe(
      tap((response: Clients) => {
         response.content = response.content         
         .map(content => new Content(content.id, content.name))
         
         .filter(content => content.name.toLocaleLowerCase().includes(filter.name))   
             
         return response;   
         
      })
    );
    
  }

  private handleError(error: HttpErrorResponse | any) {
    console.log(error);
    return _throw(error);
  }
}
