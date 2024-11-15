export interface UserProfile {
  id: number;
  email: string;
  role: 'ESTUDIANTE' | 'EXPERTO' | 'ADMIN' | null;
  nombre: string;
  apellido: string;
  informacionPersonal?: string,
  nivelAcademico?: string,
  institucion?: string,
  intereses?: string,
  carreraInteres?: string,
  experiencia?: string,
  certificaciones?: string,
  carrera?: string
}
