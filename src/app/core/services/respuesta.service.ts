import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../../shared/models/respuesta.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RespuestaService {
  private baseURL = `${environment.baseURL}/respuestas`; // Ajusta según tu backend

  private http = inject(HttpClient);

  // Obtener una respuesta por ID
  obtenerRespuestaPorId(id: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.baseURL}/${id}`);
  }

  // Listar todas las respuestas
  listarRespuestas(): Observable<Respuesta[]> {
    return this.http.get<Respuesta[]>(this.baseURL);
  }
}
