import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../../../core/services/recurso.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Recurso } from '../../../shared/models/recurso.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-recurso',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatSnackBarModule],
  templateUrl: './eliminar-recursos.component.html',
  styleUrl: './eliminar-recursos.component.css'
})
export class EliminarRecursoComponent implements OnInit {
  recursoId!: number; // El ID del recurso a eliminar
  recurso?: Recurso;  // El recurso a eliminar

  constructor(
    private recursoService: RecursoService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el ID del recurso desde la URL
    this.recursoId = +this.route.snapshot.paramMap.get('id')!;
    // Cargar el recurso para confirmar la eliminación
    this.cargarRecurso();
  }

  // Función para cargar los detalles del recurso
  cargarRecurso(): void {
    this.recursoService.getRecursoById(this.recursoId).subscribe({
      next: (recurso) => {
        this.recurso = recurso;  // Guardar el recurso cargado
      },
      error: () => {
        this.snackBar.open('Error al cargar el recurso', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  // Función para eliminar el recurso
  eliminarRecurso(): void {
    if (this.recursoId) {
      this.recursoService.eliminarRecurso(this.recursoId).subscribe({
        next: () => {
          this.snackBar.open('Recurso eliminado con éxito', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
          // Redirigir a la lista de recursos
          this.router.navigate(['/admin/lista-recursos']);
        },
        error: () => {
          this.snackBar.open('Error al eliminar el recurso', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
}