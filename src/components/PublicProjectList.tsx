import React, { useEffect, useState } from 'react';

// Define la interfaz para los proyectos
interface Project {
  _id: string;
  title: string;
  description: string;
  link: string;
}

const PublicProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Usamos la interfaz Project

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error al obtener los proyectos:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Proyectos Públicos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicProjectList;
