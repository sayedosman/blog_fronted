import {Injectable} from '@angular/core';
import { LoginPaload } from './login-payload';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtAutResponse } from './jwt-aut-response';
import { RegisterPayload } from './register-payload';
import { UserPayload } from '../user-payload';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

 
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private url = 'http://localhost:8080/api/auth/';
  constructor(private httpClient: HttpClient,private router:Router ) {
  }
   getUser(username:string): Observable<UserPayload>{
    return this.httpClient.get<UserPayload>('http://localhost:8080/api/auth/get/'+username);
   }
  register(registerPayload: RegisterPayload): Observable<UserPayload> {
    return this.httpClient.post<UserPayload>(this.url + 'signup', registerPayload);
  }
  login(loginPayload: LoginPaload): Observable<JwtAutResponse> {
    return this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload).pipe();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('username') != null;
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigateByUrl('/login');
  }
}
