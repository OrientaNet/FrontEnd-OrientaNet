import { Estudiante } from './../../shared/models/estudiante.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  private baseURL = `${environment.baseURL}/estudiantes`; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  obtenerEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.baseURL);
  }
}
