import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../../../core/services/estudiante.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Estudiante } from '../../../shared/models/estudiante.model';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  loading = true;
  error = '';

  private estudianteService = inject(EstudianteService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.loadEstudiantes();
  }

  loadEstudiantes(): void {
    this.estudianteService.obtenerEstudiantes().subscribe({
      next: (data) => {
        this.estudiantes = data;
        this.loading = false;
        this.showSnackBar('Lista de estudiantes cargada con éxito');
      },
      error: () => {
        this.error = 'Error al cargar la lista de estudiantes';
        this.loading = false;
        this.showSnackBar(this.error);
      }
    });
  }

  verDetalleEstudiante(id: number): void {
    this.router.navigate([`/admin/estudiantes/${id}`]);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
