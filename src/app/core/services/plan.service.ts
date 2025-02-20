import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private baseURL = `${environment.baseURL}/planes`;

  constructor(private http: HttpClient) {}

  // Obtener todos los planes disponibles
  obtenerPlanes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }

  // Obtener un plan específico por su ID
  obtenerPlanPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }

  // Crear un nuevo plan
  crearPlan(plan: any): Observable<any> {
    return this.http.post<any>(this.baseURL, plan);
  }

  // Actualizar un plan existente
  actualizarPlan(id: number, plan: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/${id}`, plan);
  }

  // Eliminar un plan por su ID
  eliminarPlan(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${id}`);
  }
}
