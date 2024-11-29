import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultadoTest } from '../../shared/models/resultado-test.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResultadoTestService {
  private baseURL = `${environment.baseURL}/resultadotest`;

  private http = inject(HttpClient);

  getResultadoTestByEstudianteId(estudianteId: number): Observable<ResultadoTest> {
    // Usamos el nuevo endpoint con el estudianteId dinámico
    return this.http.get<ResultadoTest>(`${this.baseURL}/buscarPorUsuario/${estudianteId}`);
  }
}
