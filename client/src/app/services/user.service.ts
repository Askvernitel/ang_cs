import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:44330/api/User';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  getJobOptions(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  loginUser(userData:any): Observable<any>{
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    
    return this.http.post<string>(`${this.apiUrl}/login`, userData, {headers, responseType:'text' as 'json'});

  }
  logOut(){
      localStorage.removeItem("token");
      this.router.navigate(['/login']);
  }
}
