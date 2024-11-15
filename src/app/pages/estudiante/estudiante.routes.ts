import { Routes } from '@angular/router';
import { EstudianteLayoutComponent } from './estudiante-layout/estudiante-layout.component';
import { RealizarPruebaComponent } from './realizar-prueba/realizar-prueba.component';
import { PagosComponent } from './pagos/pagos.component';
import { UserProfileComponent } from '../../shared/components/user-profile/user-profile.component';
import { UpdateProfileComponent } from '../../shared/components/update-profile/update-profile.component';
import { ResultadoTestComponent } from './resultado-test/resultado-test.component';

export const estudianteRoutes: Routes = [
  {
    path: '',
    component: EstudianteLayoutComponent,
    children: [
      { path: 'realizar-prueba', component: RealizarPruebaComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'profile/update', component: UpdateProfileComponent },
      { path: 'resultado-test', component: ResultadoTestComponent }
    ],
  }
];
