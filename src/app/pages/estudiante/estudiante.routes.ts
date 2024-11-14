import { Routes } from '@angular/router';
import { EstudianteLayoutComponent } from './estudiante-layout/estudiante-layout.component';
import { RealizarPruebaComponent } from './realizar-prueba/realizar-prueba.component';
import { PagosComponent } from './pagos/pagos.component';
import { UserProfileComponent } from '../../shared/components/user-profile/user-profile.component';
import { UpdateProfileComponent } from '../../shared/components/update-profile/update-profile.component';

export const estudianteRoutes: Routes = [
  {
    path: '',
    component: EstudianteLayoutComponent,
    children: [
      { path: 'realizar-prueba', component: RealizarPruebaComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'profile', component: UserProfileComponent},
      { path: 'profile/update', component: UpdateProfileComponent},
      { path: '', redirectTo: 'realizar-prueba', pathMatch: 'full' }, // Ruta por defecto
    ]
  }
];
