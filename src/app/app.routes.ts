import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { authInverseGuard } from './core/guards/auth-inverse.guard';

export const routes: Routes = [

  {path:'', redirectTo: 'auth/login', pathMatch: 'full'},

  {
    path:'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(a => a.authroutes),
    canActivate: [authInverseGuard]

  },

  {
    path:'estudiante',
    loadChildren: () => import('./pages/estudiante/estudiante.routes').then(e => e.estudianteRoutes),
    canActivate: [authGuard]
  },

    {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.routes').then((m) => m.adminRoutes),
    canActivate: [authGuard], // Asegúrate de que el `authGuard` valide el rol de administrador.
  },
];
