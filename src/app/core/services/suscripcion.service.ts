import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SuscripcionService {
  private baseURL = `${environment.baseURL}/suscripciones`;

  constructor(private http: HttpClient) {}

  suscribirse(estudianteId: number, planId: number, monto: number, metodoPago: string = 'PAYPAL'): Observable<any> {
    const params = new HttpParams()
      .set('estudianteId', estudianteId.toString())
      .set('planId', planId.toString())
      .set('monto', monto.toString())
      .set('metodoPago', metodoPago);

    return this.http.post(`${this.baseURL}/suscribir`, {}, { params });
  }

  registrarPago(suscripcionId: number, monto: number, metodoPago: string): Observable<any> {
    const params = new HttpParams()
      .set('suscripcionId', suscripcionId.toString())
      .set('monto', monto.toString())
      .set('metodoPago', metodoPago);

    return this.http.post(`${environment.baseURL}/pagos/registrar-pago`, {}, { params });
  }

}
