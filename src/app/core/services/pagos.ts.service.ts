import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PagosService {
  private baseURL = `${environment.baseURL}/pagos`; // URL base del controlador de pagos

  constructor(private http: HttpClient) {}

  // Registrar un nuevo pago
  registrarPago(planId: number, estudianteId: number): Observable<any> {
    return this.http.post(`${this.baseURL}/registrar-pago`, {
      planId,
      estudianteId,
    });
  }

  // Confirmar el pago después de PayPal
  confirmarPago(pagoId: number): Observable<any> {
    return this.http.post(`${this.baseURL}/confirmar-pago/${pagoId}`, {});
  }

  // Obtener el historial de pagos del estudiante
  obtenerHistorialPagos(estudianteId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/historial-pagos/${estudianteId}`);
  }
}
