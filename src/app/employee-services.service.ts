import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  private url = '/assets/JSONData/employees.json' ;

  getData(): Observable <IEmployee[]>
  {
    return this.http.get<IEmployee[]> (this.url) ;
  }

  constructor( private http: HttpClient) { }
}
