export interface Carrera {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface Usuario {
  id: number;
  email: string;
  role: string; // "ESTUDIANTE", "ADMIN", etc.
  nombre: string;
  apellido: string;
  informacionPersonal: string;
  nivelAcademico: string;
  institucion: string;
  intereses: string;
  carreraInteres: Carrera;
  experiencia: string;
  certificaciones: string;
  carrera: Carrera;
}
