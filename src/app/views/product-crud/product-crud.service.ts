import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "../../../../node_modules/@angular/common/http";
import {
  catchError,
  map,
  delay,
  tap
} from "../../../../node_modules/rxjs/operators";
import { environment } from "environments/environment.prod";
import { _throw } from "rxjs/Observable/throw";

import { of } from "../../../../node_modules/rxjs";


@Injectable()
export class ProductCrudService {
  productApiUrl: string = environment.baseApiURL + "products/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    })
  };

  constructor(private http: HttpClient) {}

  updateProduct(id, item) {
    return this.http
      .put<any>(this.productApiUrl + id, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  addProduct(productObj, items): Observable<any> {
    return this.http
      .post<any>(this.productApiUrl, productObj, this.httpOptions)
      .pipe(
        map(data => {
          items.unshift(data.content);
          return items.slice();
        }),
        catchError(this.handleError)
      );
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.productApiUrl).pipe(catchError(this.handleError));
  }

  removeProduct(row, items): Observable<any> {
    return this.http.delete(this.productApiUrl + row.id, this.httpOptions).pipe(
      map(data => {
        let i = items.indexOf(row);
        return items.splice(i, 1);
      }),
      catchError(this.handleError)
    );
  }
  

  private handleError(error: HttpErrorResponse | any) {
    //console.log(error)
    return _throw(error);
  }
}
