import React, { useState } from 'react';

const ProjectForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const project = { title, description, link, image };

    try {
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (response.ok) {
        alert('Proyecto creado exitosamente');
        setTitle('');
        setDescription('');
        setLink('');
        setImage('');
      } else {
        alert('Error al crear el proyecto');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al intentar agregar el proyecto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Título</label>
        <input
          className="w-full p-2 border"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Descripción</label>
        <textarea
          className="w-full p-2 border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Enlace del Proyecto</label>
        <input
          className="w-full p-2 border"
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Imagen (opcional)</label>
        <input
          className="w-full p-2 border"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
        Crear Proyecto
      </button>
    </form>
  );
};

export default ProjectForm;
