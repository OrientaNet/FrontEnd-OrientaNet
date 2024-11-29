import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecursoService } from '../../../core/services/recurso.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar-recurso',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './actualizar-recursos.component.html',
  styleUrl: './actualizar-recursos.component.css'
})
export class ActualizarRecursoComponent implements OnInit {
  recursoForm!: FormGroup;
  recursoId!: number;

  constructor(
    private fb: FormBuilder,
    private recursoService: RecursoService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recursoId = +this.route.snapshot.paramMap.get('id')!;
    this.recursoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

    this.cargarRecurso();
  }

  cargarRecurso(): void {
    this.recursoService.getRecursoById(this.recursoId).subscribe({
      next: (recurso) => {
        this.recursoForm.patchValue(recurso);
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

  actualizarRecurso(): void {
    if (this.recursoForm.valid) {
      this.recursoService.actualizarRecurso(this.recursoId, this.recursoForm.value).subscribe({
        next: () => {
          this.snackBar.open('Recurso actualizado con éxito', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/admin/lista-recursos']);
        },
        error: () => {
          this.snackBar.open('Error al actualizar el recurso', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
}
