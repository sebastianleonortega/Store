import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserList } from '../Interface/user-list.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_SERVER='http://localhost:3000/'

  constructor(
    private http: HttpClient
  ) { }

    public GetAllUser():Observable<IUserList[]>{
      return this.http.get<IUserList[]>(this.API_SERVER+'users')
    }

  getUserById(id: number):Observable<IUserList[]>{
    return this.http.get<IUserList[]>(this.API_SERVER+'users/'+ id)
  }
}
