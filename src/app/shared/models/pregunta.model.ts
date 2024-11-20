import { Respuesta } from './../../shared/models/respuesta.model';

export interface Pregunta {
  id: number;
  descripcion: string;
  respuestaIds: number[]; // ID de las respuestas asociadas
  pruebaVocacionalId: number; // ID de la prueba vocacional a la que pertenece
  respuestas?: Respuesta[]; // Agregar esta propiedad opcional
}
