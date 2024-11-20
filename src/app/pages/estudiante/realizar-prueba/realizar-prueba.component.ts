import { Component, OnInit } from '@angular/core';

import { RespuestaService } from './../../../core/services/respuesta.service';
import { Respuesta } from './../../../shared/models/respuesta.model';
import { Pregunta } from './../../../shared/models/pregunta.model';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PruebaVocacionalService } from '../../../core/services/prueba-vocacional.service';
import { PreguntaService } from '../../../core/services/pregunta.service';
import { PruebaVocacional } from '../../../shared/models/prueba.model';




import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-realizar-prueba',
  standalone: true,
  templateUrl: './realizar-prueba.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSnackBarModule, MatButtonModule, RouterLink, MatRadioButton],
  styleUrls: ['./realizar-prueba.component.css'],
})
export class RealizarPruebaComponent implements OnInit {
  prueba!: PruebaVocacional;
  preguntas: Pregunta[] = [];
  indicePregunta = 0;
  formularioPrueba!: FormGroup;

  constructor(
    private pruebaService: PruebaVocacionalService,
    private preguntaService: PreguntaService,
    private respuestaService: RespuestaService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarPrueba(2); // Cambia '1' por el ID dinámico de la prueba que deseas cargar
  }

  cargarPrueba(pruebaId: number): void {
    this.pruebaService.obtenerPrueba(pruebaId).subscribe({
      next: (data) => {
        this.prueba = data;
        this.cargarPreguntas();
      },
      error: () => {
        this.snackBar.open('Error al cargar la prueba', 'Cerrar', { duration: 3000 });
      },
    });
  }

  cargarPreguntas(): void {
    // Mapear IDs de preguntas a observables
    const preguntaObservables = this.prueba.preguntaIds.map((id) =>
      this.preguntaService.obtenerPreguntaPorId(id).toPromise()
    );

    // Resolver todas las preguntas primero
    Promise.all(preguntaObservables)
    .then((preguntas) => {
      // Validar que todas las preguntas estén definidas
      if (!preguntas || preguntas.some((pregunta) => pregunta === undefined)) {
        throw new Error('Error: Una o más preguntas no se cargaron correctamente');
      }

      // Mapear preguntas con sus respuestas
      const respuestaObservables = preguntas.map((pregunta) => {
        if (!pregunta || !pregunta.respuestaIds) {
          throw new Error('Error: Las IDs de respuestas de la pregunta son inválidas');
        }

        // Resolver respuestas para cada pregunta
        return Promise.all(
          pregunta.respuestaIds.map((respuestaId) =>
            this.respuestaService.obtenerRespuestaPorId(respuestaId).toPromise()
          )
        ).then((respuestas) => {
          // Filtrar respuestas válidas y lanzar error si alguna falta
          const respuestasValidas = respuestas.filter((respuesta) => respuesta !== undefined) as Respuesta[];
          if (respuestasValidas.length !== pregunta.respuestaIds.length) {
            throw new Error('Error: No se pudieron cargar todas las respuestas de una pregunta');
          }

          return { ...pregunta, respuestas: respuestasValidas }; // Combinar pregunta con respuestas
        });
      });

      // Resolver todas las preguntas con sus respuestas
      return Promise.all(respuestaObservables);
    })
    .then((preguntasCompletas) => {
      if (!preguntasCompletas || preguntasCompletas.some((pregunta) => !pregunta)) {
        throw new Error('Error: No se pudieron cargar las preguntas completas');
      }

      this.preguntas = preguntasCompletas as Pregunta[]; // Asignar preguntas completas
      this.crearFormulario(); // Crear formulario reactivo
    })
    .catch((error) => {
      console.error(error);
      this.snackBar.open('Error al cargar las preguntas o respuestas', 'Cerrar', { duration: 3000 });
    });
  }






  crearFormulario(): void {
    const controles: any = {};
    this.preguntas.forEach((pregunta) => {
      controles[pregunta.id] = [null, Validators.required]; // Respuesta obligatoria
    });
    this.formularioPrueba = this.fb.group(controles);
  }


  get preguntaActual(): Pregunta {
    return this.preguntas[this.indicePregunta];
  }

  siguientePregunta(): void {
    if (this.indicePregunta < this.preguntas.length - 1) {
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
      const respuestasSeleccionadas = this.formularioPrueba.value; // Obtiene las respuestas seleccionadas
      const estudianteId = 1; // Cambiar por el ID del estudiante logueado

      this.pruebaService.enviarRespuestas(this.prueba.id, estudianteId, respuestasSeleccionadas).subscribe({
        next: () => {
          this.snackBar.open('Prueba enviada exitosamente', 'Cerrar', { duration: 3000 });
          this.router.navigate(['/estudiante/resultado-test']);
        },
        error: () => {
          this.snackBar.open('Error al enviar las respuestas', 'Cerrar', { duration: 3000 });
        },
      });
    } else {
      this.snackBar.open('Por favor, responde todas las preguntas antes de finalizar', 'Cerrar', { duration: 3000 });
    }
  }
}
