import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserProfile } from '../../models/user-profile.model';
import { ResultadoTestComponent } from '../../../pages/estudiante/resultado-test/resultado-test.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, ResultadoTestComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  profile!: UserProfile; // Aseguramos que no sea null o undefined con el operador de aserción
  isEstudiante: boolean = false;

  private userProfileService = inject(UserProfileService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.loadUserProfile();
  }

  private checkUserRole(): void {
    const authData = this.authService.getUser(); // Obtiene los datos del usuario autenticado
    this.isEstudiante = authData?.role === 'ESTUDIANTE'; // Actualiza la bandera según el rol
  }

  loadUserProfile(): void {
    const authData = this.authService.getUser();
    const userId = authData?.id;

    if (userId) {
      this.userProfileService.getUserProfile(userId).subscribe({
        next: (profile) => {
          this.profile = profile;
          this.showSnackBar('Perfil cargado con éxito');
        },
        error: () => {
          this.showSnackBar('Error al cargar el perfil');
        }
      });
    } else {
      this.showSnackBar('Usuario no autenticado');
      this.router.navigate(['/auth/login']);
    }
  }

  redirectToUpdateProfile(): void {
    this.router.navigate(['/estudiante/profile/update']);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
