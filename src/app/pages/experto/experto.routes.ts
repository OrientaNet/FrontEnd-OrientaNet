import { Routes } from '@angular/router';
import { ExpertoLayoutComponent } from './experto-layout/experto-layout.component';
import { UserProfileComponent } from '../../shared/components/user-profile/user-profile.component';

export const expertoRoutes: Routes = [
  {
    path: '',
    component: ExpertoLayoutComponent,
    children: [
      { path: 'profile', component: UserProfileComponent },
    ]
  }
];
