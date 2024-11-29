import { AuthService } from './../../../core/services/auth.service';
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

@Component({
  selector: 'app-realizar-prueba',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule, MatSnackBarModule, MatCardModule, MatRadioModule, MatButtonModule],
  templateUrl: './realizar-prueba.component.html',
  styleUrls: ['./realizar-prueba.component.css']
})
export class RealizarPruebaComponent implements OnInit {
  prueba!: PruebaVocacional;
  formularioPrueba!: FormGroup;
  indicePregunta = 0;

  constructor(
    private pruebaService: PruebaVocacionalService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.cargarPrueba(17); // Cambia este ID por el ID dinámico de la prueba
  }

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

  crearFormulario(): void {
    const controles: any = {};
    this.prueba.preguntas.forEach((pregunta) => {
      controles[pregunta.id] = [null, Validators.required]; // Respuesta obligatoria
    });
    this.formularioPrueba = this.fb.group(controles);
  }

  get preguntaActual() {
    return this.prueba.preguntas[this.indicePregunta];
  }

  siguientePregunta(): void {
    if (this.indicePregunta < this.prueba.preguntas.length - 1) {
      this.indicePregunta++;
    }
  }

  anteriorPregunta(): void {
    if (this.indicePregunta > 0) {
      this.indicePregunta--;
    }
  }

  terminarPrueba(): void {
    if (this.formularioPrueba.valid) {
      const respuestasSeleccionadas = this.formularioPrueba.value;
      const authData = this.AuthService.getUser();
      const estudianteId = authData?.id;

      // Verifica si estudianteId está definido
      if (estudianteId !== undefined) {
        this.pruebaService.enviarRespuestas(this.prueba.id, estudianteId, respuestasSeleccionadas).subscribe({
          next: () => {
            this.snackBar.open('Prueba enviada exitosamente', 'Cerrar', { duration: 3000 });
            this.router.navigate(['/estudiante/resultado-test']);
          },
          error: () => {
            this.snackBar.open('Error al enviar las respuestas', 'Cerrar', { duration: 3000 });
          }
        });
      } else {
        // Si el estudianteId no está definido, muestra un mensaje de error
        this.snackBar.open('No se pudo obtener el ID del estudiante. Por favor, vuelve a iniciar sesión.', 'Cerrar', { duration: 3000 });
      }
    } else {
      this.snackBar.open('Por favor, responde todas las preguntas antes de finalizar', 'Cerrar', { duration: 3000 });
    }
  }
}
