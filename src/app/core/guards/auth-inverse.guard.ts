import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authInverseGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
      const userRole = authService.getUserRole();

      if (userRole === 'EXPERTO') {
              router.navigate(['/experto']);

      } else if (userRole === 'ESTUDIANTE') {
              router.navigate(['/estudiante']);

      } else if (userRole === 'ADMIN') {
              router.navigate(['/admin']);
      }

      return false;
  }

  return true; // Permitir acceso si no está autenticado
};

