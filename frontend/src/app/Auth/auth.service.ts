import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../App Constants/appconstants.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  pathRoot = AppConstants.BASE_URL + "/auth";

  private loggedIn = new BehaviorSubject<boolean>(this.isUserAuthenticated());
  authStatus$ = this.loggedIn.asObservable(); 

  constructor(private http: HttpClient) { }


  signup(credentials: {username: string, password: string}){
    return this.http.post(this.pathRoot + "/signup", credentials);
  }

  login(credentials: {username: string, password: string}){
    return this.http.post(this.pathRoot + "/login", credentials).pipe(
      tap((res: any) => {
        if(res && res['token']){
          const user = new User(res['username'], res['roles']);
          sessionStorage.setItem(AppConstants.AUTH_TOKEN, res['token']);
          sessionStorage.setItem(AppConstants.AUTH_USER, JSON.stringify(user));
          this.loggedIn.next(true);
        }
      })
    )
  }

  logout(){
    sessionStorage.clear();
    this.loggedIn.next(false);
  }

  getUserRole(){
    const user = sessionStorage.getItem(AppConstants.AUTH_USER);
    return user ? JSON.parse(user).roles[0] : null;
  }

  getToken(): string|null{
    return sessionStorage.getItem(AppConstants.AUTH_TOKEN);
  }

  isUserAuthenticated(){
    console.log("Login here ====")
    return !(this.getToken() == null);
  }

}
