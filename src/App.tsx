import React, { useState, useEffect } from 'react';
import ProjectForm from './components/ProjectForm.tsx';

// Define la interfaz Project
interface Project {
  _id: string;
  title: string;
  description: string;
  link: string;
}

// Componente ProjectItem
interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="text-gray-600">{project.description}</p>
    <a href={project.link} className="text-blue-500 hover:underline">Ver Proyecto</a>
  </div>
);

function App() {
  // Estado para almacenar los proyectos obtenidos del backend
  const [projects, setProjects] = useState<Project[]>([]);

  // useEffect para obtener proyectos dinámicamente desde el backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects'); // Cambia la URL si es necesario
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []); // El segundo argumento vacío indica que esto se ejecuta al cargar el componente

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl">Mis Proyectos</h1>
      </header>
      <main className="container mx-auto py-8">
        <section id="proyectos">
          <h2 className="text-2xl font-bold mb-6 text-center">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectItem key={project._id} project={project} />
            ))}
          </div>
        </section>
        {/* Sección para agregar proyectos */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Agregar Proyecto</h2>
          <ProjectForm />
        </section>
      </main>
    </div>
  );
}

export default App;
