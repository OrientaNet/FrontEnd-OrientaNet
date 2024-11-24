import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { UsuarioDetalleComponent } from './usuarios/usuarios.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { ListaCarrerasComponent } from './lista-carreras/lista-carreras.component';
import { CrearCarreraComponent } from './crear-carrera/crear-carrera.component';
import { EditarCarreraComponent } from './editar-carrera/editar-carrera.component';
import { RegisterExpertoComponent } from './register-experto/register-experto.component';


export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'usuarios', component: UsuarioDetalleComponent },
      { path: 'lista-estudiantes', component: ListaEstudiantesComponent },
      { path: 'lista-carreras', component: ListaCarrerasComponent },
      { path: 'crear-carreras', component: CrearCarreraComponent },
      {
        path: 'editar-carrera/:id',
        component: EditarCarreraComponent,
      },
      { path: 'registrar-experto', component: RegisterExpertoComponent },

    ],
  },
];
