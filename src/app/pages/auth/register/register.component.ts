import { CommonModule } from '@angular/common';
import { AuthService } from './../../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule,
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
  private authService = inject(AuthService);

  constructor() {
    // Crear el formulario con las validaciones necesarias
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [
        Validators.required,
        this.passwordValidator // Aquí aplicamos la validación personalizada de la contraseña
      ]]
    });
  }

  // Validación personalizada para la contraseña
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null; // Si el campo está vacío, no hay error
    }

    const password = control.value;
    const regexUpperCase = /^[A-Z]/;  // Verifica que la primera letra sea mayúscula
    const regexNumber = /\d/;         // Verifica si la contraseña contiene al menos un número

    // Verifica las condiciones de la contraseña
    if (!regexUpperCase.test(password) || !regexNumber.test(password) || password.length < 8) {
      return { passwordPattern: true }; // Si no cumple con las reglas, devuelve un error
    }

    return null; // Si pasa todas las condiciones, no hay error
  }

  // Función para verificar si hay errores en el formulario
  controlHasError(control: string, error: string) {
    return this.registerForm.controls[control].hasError(error);
  }

  // Enviar el formulario
  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      // Llamamos al servicio para registrar el usuario
      this.authService.register(userData).subscribe({
        next: () => {
          this.showSnackBar('Usuario creado correctamente');
          this.router.navigate(['/auth/login']);  // Redirigir a la página de login
        },
        error: (error) => {
          this.showSnackBar(error.error.message);  // Mostrar mensaje de error
        }
      });
    } else {
      this.showSnackBar("Por favor, complete los campos correctamente.");
    }
  }

  // Mostrar mensaje en la barra de notificaciones
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }
}
