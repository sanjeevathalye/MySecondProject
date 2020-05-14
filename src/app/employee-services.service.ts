import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  private url = '/assets/JSONData/employees.json' ;

  getData(): Observable <IEmployee[]>
  {
    return this.http.get<IEmployee[]> (this.url).pipe(catchError(this.handleError));
  }

  constructor( private http: HttpClient) { }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('A client side error occurred: ', err.error.message);
    } else {
      // The server returned an unsuccessful response code.
      console.error('A server side error occurred: ', err.error.message);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');

  }
}
