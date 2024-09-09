import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Define la interfaz para los proyectos
interface Project {
  _id: string;
  title: string;
  description: string;
  link: string;
}

const AdminProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Usamos la interfaz Project

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:5000/api/projects');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      await fetch(`http://localhost:5000/api/projects/${id}`, { method: 'DELETE' });
      setProjects(projects.filter(project => project._id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Administrar Proyectos</h2>
      <Link to="/admin/create" className="bg-blue-500 text-white py-2 px-4 rounded mb-4 inline-block">Agregar Proyecto</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex space-x-2">
              <Link to={`/admin/edit/${project._id}`} className="text-blue-500">Editar</Link>
              <button onClick={() => handleDelete(project._id)} className="text-red-500">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjectList;
