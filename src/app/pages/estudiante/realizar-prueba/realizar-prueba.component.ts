import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PruebaVocacionalService } from '../../../core/services/prueba-vocacional.service';
import { PruebaVocacional } from '../../../shared/models/prueba.model';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-realizar-prueba',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule, MatSnackBarModule, MatCardModule, MatRadioModule, MatButtonModule],
  templateUrl: './realizar-prueba.component.html',
  styleUrls: ['./realizar-prueba.component.css']
})
export class RealizarPruebaComponent implements OnInit {
  prueba!: PruebaVocacional; // La prueba que se va a mostrar
  formularioPrueba!: FormGroup; // Formulario reactivo para gestionar las respuestas
  indicePregunta = 0; // Índice de la pregunta actual

  constructor(
    private pruebaService: PruebaVocacionalService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService // Inyectar AuthService para obtener el ID del estudiante
  ) {}

  ngOnInit(): void {
    this.cargarPrueba(17); // Cambia este ID por el ID dinámico de la prueba
  }

  // Cargar la prueba con un ID específico
  cargarPrueba(pruebaId: number): void {
    this.pruebaService.obtenerPrueba(pruebaId).subscribe({
      next: (data) => {
        this.prueba = data;
        this.crearFormulario();
      },
      error: () => {
        this.snackBar.open('Error al cargar la prueba', 'Cerrar', { duration: 3000 });
      }
    });
  }

  // Crear el formulario reactivo con un control por cada pregunta
  crearFormulario(): void {
    const controles: any = {};
    this.prueba.preguntas.forEach((pregunta) => {
      controles[pregunta.id] = [null, Validators.required]; // Cada respuesta es obligatoria
    });
    this.formularioPrueba = this.fb.group(controles); // Asignar los controles al formulario
  }

  // Obtener la pregunta actual según el índice
  get preguntaActual() {
    return this.prueba.preguntas[this.indicePregunta];
  }

  // Avanzar a la siguiente pregunta
  siguientePregunta(): void {
    if (this.indicePregunta < this.prueba.preguntas.length - 1) {
      this.indicePregunta++;
    }
  }

  // Retroceder a la pregunta anterior
  anteriorPregunta(): void {
    if (this.indicePregunta > 0) {
      this.indicePregunta--;
    }
  }

  // Terminar la prueba y enviar las respuestas al backend
  terminarPrueba(): void {
    if (this.formularioPrueba.valid) {
      const respuestasSeleccionadas = this.formularioPrueba.value; // Obtener las respuestas seleccionadas
      const estudianteId = this.authService.getUser()?.id; // Obtener el ID del estudiante logueado

      if (estudianteId) {
        // Enviar las respuestas al backend
        this.pruebaService.enviarRespuestas(this.prueba.id, estudianteId, respuestasSeleccionadas).subscribe({
          next: () => {
            this.snackBar.open('Prueba enviada exitosamente', 'Cerrar', { duration: 3000 });
            this.router.navigate(['/estudiante/resultado-test']); // Redirigir al resultado del test
          },
          error: () => {
            this.snackBar.open('Error al enviar las respuestas', 'Cerrar', { duration: 3000 });
          }
        });
      } else {
        this.snackBar.open('Error: No se encontró el ID del estudiante', 'Cerrar', { duration: 3000 });
      }
    } else {
      this.snackBar.open('Por favor, responde todas las preguntas antes de finalizar', 'Cerrar', { duration: 3000 });
    }
  }
}
