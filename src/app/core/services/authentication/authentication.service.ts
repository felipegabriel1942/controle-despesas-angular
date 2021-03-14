import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { apiUrl } from '../../constants/api-url';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  authenticateUser(user: User): Observable<any> {
    return this.http.post(`${apiUrl}/login`, user, {
      observe: 'response',
      responseType: 'text',
    });
  }
}
