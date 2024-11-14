import { RegisterRequest } from './../../shared/models/register-request.model';
import { AuthRespoonse } from './../../shared/models/auth-response.model';
import { AuthRequest } from './../../shared/models/auth-request.model';

import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.services';
import { Observable, tap } from 'rxjs';
import { RegisterResponse } from '../../shared/models/register-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = `${environment.baseURL}/auth`;
  private http = inject(HttpClient);
  private storageService = inject(StorageService);

  constructor() { }

  login(authRequest: AuthRequest): Observable<AuthRespoonse> {
    return this.http.post<AuthRespoonse>(`${this.baseURL}/login`, authRequest)
    .pipe(
      tap(response => this.storageService.setAuthData(response))
    );
  }

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseURL}/register/estudiante`,
       registerRequest);
  }

  logout(): void{
    this.storageService.clearAuthData();
  }

  isAuthenticated(): boolean {
    return this.storageService.getAuthData() !== null;
  }

  getUser(): AuthRespoonse | null {
    const authData = this.storageService.getAuthData();
    return authData ? authData : null;
  }
}
