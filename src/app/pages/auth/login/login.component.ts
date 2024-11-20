import { routes } from './../../../app.routes';
import { Component, inject } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { AuthRequest } from '../../../shared/models/auth-request.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule,
    MatSnackBarModule, MatButtonModule, RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService);

  constructor() {
    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  controlHasError(control: string, error: string){
    return this.loginForm.controls[control].hasError(error);
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    };

    const credentials: AuthRequest = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: () => {
        this.showSnackBar('Inicio de sesión exitoso');

        // Obtener el rol del usuario autenticado
        const userRole = this.authService.getUserRole(); // Asegúrate de tener este método en tu AuthService

        // Redirigir según el rol del usuario
        if (userRole === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (userRole === 'ESTUDIANTE') {
          this.router.navigate(['/estudiante']);
        } else if (userRole === 'EXPERTO') {
          this.router.navigate(['/experto']);
        } else {
          this.showSnackBar('Rol de usuario no reconocido');
        }
      },
      error: () => {
        this.showSnackBar('Error en el inicio de sesion. Porfavor, intentar de nuevo.');
      },
    })

  }

   private showSnackBar(message:string): void{
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
   }


}
