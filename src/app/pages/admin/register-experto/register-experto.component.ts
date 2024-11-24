import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-experto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule,
    MatSnackBarModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './register-experto.component.html',
  styleUrl: './register-experto.component.css'
})
export class RegisterExpertoComponent {
  registerForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService);

  constructor() {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  controlHasError(control: string, error: string): boolean {
    return this.registerForm.controls[control]?.hasError(error);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const expertData = { ...this.registerForm.value, role: 'EXPERTO' }; // AÃ±adimos el rol de experto

      this.authService.registerExperto(expertData).subscribe({
        next: () => {
          this.snackBar.open('Experto registrado exitosamente', 'Cerrar', { duration: 3000, verticalPosition: 'top' });
          this.router.navigate(['/admin']); // Redirige al dashboard del administrador
        },
        error: (error) => {
          this.snackBar.open(error.error.message || 'Error al registrar experto', 'Cerrar', { duration: 3000, verticalPosition: 'top' });
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/admin']); // Redirige al dashboard del administrador
  }
}
