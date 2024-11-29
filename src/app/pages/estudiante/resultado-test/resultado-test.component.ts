import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ResultadoTest } from '../../../shared/models/resultado-test.model';
import { ResultadoTestService } from '../../../core/services/resultado-test.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resultado-test',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule], // Agrega CommonModule aquí
  templateUrl: './resultado-test.component.html',
  styleUrl: './resultado-test.component.css',
})
export class ResultadoTestComponent {
  resultadoTest: ResultadoTest | null = null;

  private resultadoTestService = inject(ResultadoTestService);
  private authService = inject(AuthService);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.loadResultadoTest();
  }

  loadResultadoTest(): void {
    const authData = this.authService.getUser();
    const estudianteId = authData?.id;  // Obtenemos el ID del usuario logueado

    if (estudianteId) {
      // Usamos el nuevo servicio con la URL correcta
      this.resultadoTestService.getResultadoTestByEstudianteId(estudianteId).subscribe({
        next: (resultado) => {
          this.resultadoTest = resultado;
          this.showSnackBar('Resultado del test cargado con éxito');
        },
        error: () => {
          this.showSnackBar('Error al cargar el resultado del test');
        },
      });
    } else {
      this.showSnackBar('Usuario no autenticado');
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
