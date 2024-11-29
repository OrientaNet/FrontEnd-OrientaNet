export interface Recurso {
  id: number;
  nombre: string;
  descripcion: string;
  recurso: string;  // Tipo de recurso (PDF, video, etc.)
  url: string;      // URL del recurso
  carreraId: number; // ID de la carrera
  expertoId: number; // ID del experto (esto lo obtendrás de quien esté logueado)
}
