import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PruebaVocacional } from '../../shared/models/prueba.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PruebaVocacionalService {
  private baseURL = `${environment.baseURL}/pruebas`;
  private http = inject(HttpClient);

  obtenerPrueba(pruebaId: number): Observable<PruebaVocacional> {
    return this.http.get<PruebaVocacional>(`${this.baseURL}/${pruebaId}`);
  }

  enviarRespuestas(pruebaId: number, estudianteId: number, respuestas: { [key: number]: number }): Observable<any> {
    // Solo enviamos los IDs de las respuestas, sin envolverlo en un objeto 'respuestas'
    return this.http.post(`${this.baseURL}/${estudianteId}/realizar/${pruebaId}`, respuestas);
  }

}
