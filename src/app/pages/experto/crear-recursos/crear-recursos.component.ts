import { Component, OnInit, NgModule} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecursoService } from '../../../core/services/recurso.service';
import { CarreraService } from '../../../core/services/carrera.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Carrera } from '../../../shared/models/carrera.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-recursos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, FormsModule],
  templateUrl: './crear-recursos.component.html',
  styleUrl: './crear-recursos.component.css'
})
export class CrearRecursosComponent implements OnInit {
  recursoForm!: FormGroup;
  carreras: Carrera[] = []; // Variable para almacenar las carreras

  constructor(
    private fb: FormBuilder,
    private recursoService: RecursoService,
    private carreraService: CarreraService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.recursoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      recurso: ['', Validators.required] ,
      url: ['', Validators.required] ,
      carreraId: ['', Validators.required] // Se añade el campo carreraId
    });

    // Cargar las carreras disponibles
    this.cargarCarreras();
  }

  cargarCarreras(): void {
    this.carreraService.getCarreras().subscribe({
      next: (carreras) => {
        this.carreras = carreras;
      },
      error: () => {
        this.snackBar.open('Error al cargar las carreras', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  onSubmit(): void {
    if (this.recursoForm.valid) {
      // Obtener el ID del experto logueado
      const authData = this.authService.getUser();
      const expertoId = authData?.id; // Asegúrate de obtener el expertoId correctamente

      const recursoData = {
      ...this.recursoForm.value,
      expertoId: expertoId // Asigna el ID del experto logueado
    };

  
      // Llamar al servicio para crear el recurso
      this.recursoService.crearRecurso(recursoData).subscribe({
        next: () => {
          this.snackBar.open('Recurso Educativo creado con éxito', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/admin/lista-recursos']);
        },
        error: () => {
          this.snackBar.open('Error al crear el recurso educativo', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          },);
          console.log(recursoData); // Verifica qué datos se están enviando
        }
      });
    }
  } 

}