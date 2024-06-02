import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { tap } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  login(username: string, password: string):Observable<any>{
    return this.http.post(
      AUTH_API + '/login',
      {
        username,
        password,
      },
      httpOptions
    ).pipe(
      // Xử lý phản hồi từ server
      tap((response: any) => {
        // Lưu token vào storage khi login thành công
        this.storageService.saveToken(response.accessToken);
        sessionStorage.setItem("USER", username);
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/register',
      {
        username,
        password,
        email,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + '/logout', { }, httpOptions);
  }
}
