export interface Carrera {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface Respuesta {
  id: number;
  descripcion: string;
  carrera: Carrera;
}

export interface Pregunta {
  id: number;
  descripcion: string;
  respuestas: Respuesta[];
}

export interface PruebaVocacional {
  id: number;
  nombre: string;
  preguntas: Pregunta[];
}

