import { Carrera } from './../../shared/models/carrera.model';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CarreraService {
  private http = inject(HttpClient);
  private baseURL = `${environment.baseURL}/carreras`;// Cambiar por tu URL base

  getCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(`${this.baseURL}`);
  }

  getCarreraById(id: number): Observable<Carrera> {
    return this.http.get<Carrera>(`${this.baseURL}/${id}`);
  }

  crearCarrera(carrera: Carrera): Observable<Carrera> {
    return this.http.post<Carrera>(`${this.baseURL}`, carrera);
  }

  actualizarCarrera(id: number, carrera: Carrera): Observable<Carrera> {
    return this.http.put<Carrera>(`${this.baseURL}/${id}`, carrera);
  }

  eliminarCarrera(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
