import { Routes } from '@angular/router';
import { ExpertoLayoutComponent } from './experto-layout/experto-layout.component';
import { UserProfileComponent } from '../../shared/components/user-profile/user-profile.component';
import { ListaRecursosComponent } from './lista-recursos/lista-recursos.component';
import { CrearRecursosComponent } from './crear-recursos/crear-recursos.component';
import { EliminarRecursoComponent } from './eliminar-recursos/eliminar-recursos.component';
import { ActualizarRecursoComponent } from './actualizar-recursos/actualizar-recursos.component';

export const expertoRoutes: Routes = [
  {
    path: '',
    component: ExpertoLayoutComponent,
    children: [
      { path: 'profile', component: UserProfileComponent },
      { path: 'lista-recursos', component: ListaRecursosComponent },
      { path: 'crear-recurso', component: CrearRecursosComponent},
      { path: 'eliminar-recursos', component: EliminarRecursoComponent},
      { path: 'actualizar-recursos', component: ActualizarRecursoComponent},
    ]
  }
];
