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

  // Nueva función para eliminar proyectos
  const handleDelete = async (projectId: string) => {
    const response = await fetch(`http://localhost:5000/api/projects/${projectId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // Actualizar la lista de proyectos después de eliminar uno
      setProjects(projects.filter((project) => project._id !== projectId));
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
            {/* Agregar botones de Editar y Eliminar */}
            <div className="mt-4 flex justify-between">
              <Link to={`/admin/edit/${project._id}`} className="bg-green-500 text-white py-1 px-3 rounded">Editar</Link>
              <button onClick={() => handleDelete(project._id)} className="bg-red-500 text-white py-1 px-3 rounded">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjectList;
