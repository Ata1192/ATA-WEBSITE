export interface Project {
  id: number;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

// TODO: Add your projects here later
export const projects: Project[] = [];
