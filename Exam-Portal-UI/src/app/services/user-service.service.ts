import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../config/api.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  addUser(user: any) : Observable<any> {
    return this.http.post(API_ENDPOINTS.USERS.CREATE, user);
  }

  getUser(id:string):Observable<any>{
    return this.http.get(API_ENDPOINTS.USERS.GET_BY_ID(id));
  }
}
