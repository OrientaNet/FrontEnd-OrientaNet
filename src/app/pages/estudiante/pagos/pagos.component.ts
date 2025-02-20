import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PagosService } from '../../../core/services/pagos.ts.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent implements OnInit {
  historialPagos: any[] = []; // Asegurar que siempre sea un array vacío
  isLoading: boolean = true;

  private pagosService = inject(PagosService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.obtenerHistorialPagos();
  }

  obtenerHistorialPagos(): void {
    // Obtener los datos del usuario autenticado
    const authData = this.authService.getUser();
    const estudianteId = authData?.id;

    if (!estudianteId) {
      this.showSnackBar('Error: No se pudo obtener el ID del estudiante.');
      this.isLoading = false;
      return;
    }

    this.pagosService.obtenerHistorialPagos(estudianteId).subscribe({
      next: (pagos) => {
        this.historialPagos = pagos ?? []; // Si la respuesta es null o undefined, asigna un array vacío
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.showSnackBar('Error al cargar el historial de pagos');
      }
    });
  }

  suscribirse(): void {
    this.router.navigate(['/estudiante/suscripcion']);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
