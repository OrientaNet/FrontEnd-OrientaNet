import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const userRole = authService.getUserRole();

    // Validar el rol del usuario y la ruta
    if (userRole === 'ESTUDIANTE' && state.url.startsWith('/estudiante')) {
      return true;
    } else if (userRole === 'ADMIN' && state.url.startsWith('/admin')) {
      return true;
    } else if (userRole === 'EXPERTO' && state.url.startsWith('/experto')) {
      return true;
    }

    // Redirigir al dashboard correcto si el rol no coincide con la ruta
    if (userRole === 'ADMIN') {
      router.navigate(['/admin']);
    } else if (userRole === 'ESTUDIANTE') {
      router.navigate(['/estudiante']);
    } else if (userRole === 'EXPERTO') {
      router.navigate(['/experto']);
    }
    return false; // Bloquear acceso si el rol no coincide
  }

  router.navigate(['/auth/login']); // Redirigir al login si no está autenticado
  return false;
};

