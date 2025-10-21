export interface Project {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  repositorio?: string;
  demoLink?: string;
  fecha: string;
}
