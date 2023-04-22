import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
baseApi:string= environment.baseApiUrl
 
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
return this.http.get<User[]>(`${this.baseApi}/api/Users`);
  }
  addUser(userRequest:User):Observable<User>{
    userRequest.id= '00000000-0000-0000-0000-000000000000'
    return this.http.post<User>(`${this.baseApi}/api/Users`, userRequest);
      }
      getUserById(userId:string) :Observable<User>{
        return this.http.get<User>(`${this.baseApi}/api/Users/${userId}`)
      }
      updateUser(id:string, userRequest:User):Observable<User>{
        return this.http.put<User>(`${this.baseApi}/api/Users/${id}`,userRequest)
      }
      deleteUser(id:string) :Observable<User>{
        return this.http.delete<User>(`${this.baseApi}/api/Users/${id}`)
      }
}
