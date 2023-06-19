import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationResponse, NotificationSettings } from '../model/notifications';
import { User, UserData } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private apiUrl = 'http://localhost:8000/';

  private httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  public register(newUser: User){
    return this.http.post(`${this.apiUrl}register`, JSON.stringify({user: newUser}), this.httpOptions);
  }

  public getUserData(){
    return this.http.get<UserData>(`${this.apiUrl}user`, this.httpOptions);
  }

  public editUser(user: User){
    return this.http.put(`${this.apiUrl}user`, JSON.stringify({user: user}), this.httpOptions);
  }

  public deleteUser(){
    return this.http.delete(`${this.apiUrl}user`,this.httpOptions);
  }

  public getNotifications() {
    return this.http.get<NotificationResponse>(`${this.apiUrl}notifications`,this.httpOptions);
  }

  public updateNotificationSettings(settings: NotificationSettings){
    return this.http.put(`${this.apiUrl}notifications`, JSON.stringify(settings), this.httpOptions);
  }
}
