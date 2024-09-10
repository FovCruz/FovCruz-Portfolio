import React from 'react';

// Definir las propiedades que acepta el componente ProjectCard
interface ProjectCardProps {
  title: string; // Título del proyecto
  description: string; // Descripción del proyecto
  buttons?: { label: string, link: string }[]; // Opcional: Array de botones con etiqueta y enlace
  image: string; // Imagen de fondo para la tarjeta del proyecto
}

// Componente funcional para mostrar una tarjeta de proyecto
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, buttons, image }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}> {/* Tarjeta con imagen de fondo */}
      <div className="card-overlay"></div> {/* Capa oscura para superponer sobre la imagen */}
      <div className="card-content"> {/* Contenedor del contenido */}
        <h2 className="card-title">{title}</h2> {/* Título del proyecto */}
        <p className="card-description">{description}</p> {/* Descripción del proyecto */}
        <div className="btn-container"> {/* Contenedor de los botones */}
          {buttons && buttons.map((button, index) => ( // Mapear botones si existen
            <a href={button.link} key={index} className="btn"> {/* Enlace con estilo de botón */}
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
