import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient:HttpClient) { }
  GetUsers(): Observable<any>
  {
      let url = "https://localhost:44377/api/Users/GetUsers";

      let reqHeaders = new HttpHeaders();
      reqHeaders.set('Cache-Control', 'no-cache')
      reqHeaders.set('Pragma', 'no-cache')

      return this.httpclient.get(url,{headers:reqHeaders}).pipe(retry(3),catchError(err=>of([])));

  }

  GetOrders(user:any): Observable<any>
  {
    var id:number = user.UserId;
  
      let url = "https://localhost:44377//userorders/" + id;

      let reqHeaders = new HttpHeaders();
      reqHeaders.set('Cache-Control', 'no-cache')
      reqHeaders.set('Pragma', 'no-cache')

      return this.httpclient.get(url,{headers:reqHeaders}).pipe(retry(3),catchError(err=>of([])));

  }

}
