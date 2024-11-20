import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../../shared/models/pregunta.model';

@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  private baseURL = 'http://localhost:8080/api/preguntas'; // Ajusta según tu backend

  private http = inject(HttpClient);

  // Obtener una pregunta por ID
  obtenerPreguntaPorId(id: number): Observable<Pregunta> {
    return this.http.get<Pregunta>(`${this.baseURL}/${id}`);
  }

  // Listar todas las preguntas
  listarPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.baseURL);
  }
}

