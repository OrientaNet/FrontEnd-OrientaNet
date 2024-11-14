import { AuthService } from './../../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule,
    MatSnackBarModule, MatButtonModule, RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private AuthService = inject(AuthService);

  constructor() {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  controlHasError(control: string, error: string) {
    return this.registerForm.controls[control].hasError(error);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.AuthService.register(userData).subscribe({
        next: () => {
          this.showSnackBar('Usuario creado correctamente');
          this,this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          this.showSnackBar(error.error.message);
        }
      });
    };

    this.showSnackBar("Registro exitoso");
    // Redirigir a otra página si es necesario
    this.router.navigate(['/auth/login']);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }
}

