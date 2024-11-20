import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarreraService } from '../../../core/services/carrera.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-carrera',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './crear-carrera.component.html',
  styleUrl: './crear-carrera.component.css'
})
export class CrearCarreraComponent implements OnInit {
  carreraForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carreraService: CarreraService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carreraForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  crearCarrera(): void {
    if (this.carreraForm.valid) {
      this.carreraService.crearCarrera(this.carreraForm.value).subscribe({
        next: () => {
          this.snackBar.open('Carrera creada con éxito', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success-snackbar'] // Agrega una clase personalizada si quieres estilizar
          });
          this.router.navigate(['/admin/lista-carreras']);
        },
        error: () => {
          this.snackBar.open('Error al crear la carrera', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar'] // Agrega una clase personalizada si quieres estilizar
          });
        }
      });
    }
  }
}
