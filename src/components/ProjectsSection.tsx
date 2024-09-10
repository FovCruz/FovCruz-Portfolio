import React, { useEffect, useState } from 'react';
import Carousel from './Carousel.tsx'; // Componente de carrusel para mostrar los proyectos
import ProjectCard from './ProjectCard.tsx'; // Componente para mostrar cada tarjeta de proyecto

// Definir la interfaz para los proyectos
interface Project {
  _id: string; // ID único del proyecto
  title: string; // Título del proyecto
  description: string; // Descripción del proyecto
  link: string; // Enlace relacionado al proyecto
  image: string; // Imagen del proyecto
  buttons?: { label: string, link: string }[]; // Opcional: Botones con etiquetas y enlaces
}

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Estado para almacenar los proyectos obtenidos

  // Efecto para obtener los proyectos desde el backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects'); // Llamada a la API para obtener proyectos
        const data = await response.json(); // Conversión de la respuesta a JSON
        console.log(data); // Verificar los datos obtenidos en la consola
        setProjects(data); // Actualizar el estado con los proyectos obtenidos
      } catch (error) {
        console.error('Error al obtener los proyectos:', error); // Manejar errores de la solicitud
      }
    };

    fetchProjects(); // Ejecutar la función para obtener los proyectos al montar el componente
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <div className="projects-section">
      <h1 className="text-4xl text-center mb-8">Proyectos Realizados</h1> {/* Título de la sección */}
      <Carousel> {/* Componente de carrusel que contiene los proyectos */}
        {projects.map((project) => (
          <ProjectCard
            key={project._id} // Asignar una clave única para cada proyecto
            title={project.title} // Pasar el título del proyecto a la tarjeta
            description={project.description} // Pasar la descripción del proyecto
            image={project.image} // Pasar la imagen del proyecto
            buttons={project.buttons} // Pasar los botones opcionales
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsSection;
