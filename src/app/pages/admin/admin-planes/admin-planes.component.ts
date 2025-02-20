import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PlanService } from '../../../core/services/plan.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-planes',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, ReactiveFormsModule],
  templateUrl: './admin-planes.component.html',
  styleUrl: './admin-planes.component.css'
})
export class AdminPlanesComponent implements OnInit {
  planes: any[] = [];
  isLoading: boolean = true;
  planForm!: FormGroup;
  editingPlanId: number | null = null;

  private planService = inject(PlanService);
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.obtenerPlanes();
    this.planForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      beneficios: ['', Validators.required],
      duracionDias: [30, [Validators.required, Validators.min(1)]]
    });
  }

  obtenerPlanes(): void {
    this.planService.obtenerPlanes().subscribe({
      next: (planes) => {
        this.planes = planes;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.showSnackBar('Error al cargar los planes.');
      }
    });
  }

  guardarPlan(): void {
    if (this.planForm.invalid) {
      this.showSnackBar('Completa todos los campos del formulario.');
      return;
    }

    const plan = this.planForm.value;

    if (this.editingPlanId) {
      this.planService.actualizarPlan(this.editingPlanId, plan).subscribe({
        next: () => {
          this.showSnackBar('Plan actualizado exitosamente.');
          this.obtenerPlanes();
          this.cancelarEdicion();
        },
        error: () => this.showSnackBar('Error al actualizar el plan.')
      });
    } else {
      this.planService.crearPlan(plan).subscribe({
        next: () => {
          this.showSnackBar('Plan creado exitosamente.');
          this.obtenerPlanes();
          this.planForm.reset();
        },
        error: () => this.showSnackBar('Error al crear el plan.')
      });
    }
  }

  editarPlan(plan: any): void {
    this.planForm.patchValue(plan);
    this.editingPlanId = plan.id;
  }

  eliminarPlan(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este plan?')) {
      this.planService.eliminarPlan(id).subscribe({
        next: () => {
          this.showSnackBar('Plan eliminado exitosamente.');
          this.obtenerPlanes();
        },
        error: () => this.showSnackBar('Error al eliminar el plan.')
      });
    }
  }

  cancelarEdicion(): void {
    this.editingPlanId = null;
    this.planForm.reset();
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
