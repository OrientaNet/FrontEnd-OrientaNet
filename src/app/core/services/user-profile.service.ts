import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../../shared/models/user-profile.model'; // Importa tu modelo
import { environment } from '../../../environments/environment'; // Ajusta la ruta según tu estructura

@Injectable({
    providedIn: 'root',
})
export class UserProfileService {
    private baseURL = `${environment.baseURL}/usuario/profile`;

    private http = inject(HttpClient);

    getUserProfile(userId: number): Observable<UserProfile> {
        return this.http.get<UserProfile>(`${this.baseURL}/${userId}`);
    }

    updateUserProfile(userId: number, profileData: UserProfile): Observable<UserProfile> {
        return this.http.put<UserProfile>(`${this.baseURL}/${userId}`, profileData);
    }
}
