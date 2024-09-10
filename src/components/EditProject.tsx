import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState({ title: '', description: '', link: '' });

  useEffect(() => {
    // Cargar los datos del proyecto actual
    const fetchProject = async () => {
      const response = await fetch(`http://localhost:5000/api/projects/${id}`);
      const data = await response.json();
      setProject(data);
    };
    fetchProject();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Actualizar proyecto
    const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    });
    if (response.ok) {
      navigate('/admin/projects');  // Redirigir después de editar
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Editar Proyecto</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Título</label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descripción</label>
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Enlace</label>
          <input
            type="text"
            name="link"
            value={project.link}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditProject;
