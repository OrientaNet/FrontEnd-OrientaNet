import { Recurso } from './../../shared/models/recurso.model';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class RecursoService {
  private http = inject(HttpClient);
  private baseURL = `${environment.baseURL}/recursos`;// Cambiar por tu URL base

  getRecurso(): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(`${this.baseURL}`);
  }

  getRecursoById(id: number): Observable<Recurso> {
    return this.http.get<Recurso>(`${this.baseURL}/${id}`);
  }

  crearRecurso(recurso: Recurso): Observable<Recurso> {
    return this.http.post<Recurso>(`${this.baseURL}`, recurso);
  }

  actualizarRecurso(id: number, recurso: Recurso): Observable<Recurso> {
    return this.http.put<Recurso>(`${this.baseURL}/${id}`,recurso);
  }

  eliminarRecurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}