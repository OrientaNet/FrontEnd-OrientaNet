import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CarreraService } from '../../../core/services/carrera.service';
import { Carrera } from '../../../shared/models/carrera.model';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-editar-carrera',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule,RouterLink, RouterOutlet, MatDialogModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './editar-carrera.component.html',
  styleUrl: './editar-carrera.component.css'
})
export class EditarCarreraComponent implements OnInit {
  carreraForm!: FormGroup;
  carreraId!: number;

  constructor(
    private fb: FormBuilder,
    private carreraService: CarreraService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la carrera desde la URL
    this.carreraId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.carreraForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    // Cargar datos de la carrera
    this.cargarDatosCarrera();
  }

  cancelarEdicion(): void {
    this.router.navigate(['/admin/lista-carreras']);
  }

  cargarDatosCarrera(): void {
    this.carreraService.getCarreraById(this.carreraId).subscribe({
      next: (carrera: Carrera) => {
        this.carreraForm.patchValue({
          nombre: carrera.nombre,
          descripcion: carrera.descripcion,
        });
      },
      error: () => {
        this.snackBar.open('Error al cargar los datos de la carrera', 'Cerrar', { duration: 3000 });
        this.router.navigate(['/admin/lista-carreras']);
      },
    });
  }

  actualizarCarrera(): void {
    if (this.carreraForm.valid) {
      const carreraActualizada: Carrera = {
        id: this.carreraId,
        ...this.carreraForm.value,
      };

      this.carreraService.actualizarCarrera(this.carreraId, carreraActualizada).subscribe({
        next: () => {
          this.snackBar.open('Carrera actualizada con éxito', 'Cerrar', { duration: 3000 });
          this.router.navigate(['/admin/lista-carreras']);
        },
        error: () => {
          this.snackBar.open('Error al actualizar la carrera', 'Cerrar', { duration: 3000 });
        },
      });
    }
  }
}
