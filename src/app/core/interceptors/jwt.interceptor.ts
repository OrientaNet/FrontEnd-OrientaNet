import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.services';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const storageService = inject(StorageService);
  const authData = storageService.getAuthData(); // Obtener los datos de autenticación

  if (authData && authData.token) {
    // Si hay un token de autenticación, clonar la solicitud y agregar el encabezado de autorización
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authData.token}`),
    });
    return next(authReq); // Pasar la solicitud modificada
  }

  // Si no hay datos de autenticación, pasar la solicitud sin modificar
  return next(req);
};
