import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'; // Importar los íconos de navegación

const MAX_VISIBILITY = 3; // Define cuántos elementos del carrusel serán visibles a la vez

// Definir las propiedades que acepta el componente Carousel
interface CarouselProps {
  children: React.ReactNode; // Acepta cualquier elemento hijo para ser mostrado en el carrusel
}

// Componente funcional de Carrusel
const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(2); // Estado para controlar el índice del elemento activo
  const count = React.Children.count(children); // Contar cuántos elementos hijos tiene el carrusel

  return (
    <div className="carousel"> {/* Contenedor del carrusel */}
      {active > 0 && ( // Botón de navegación a la izquierda, solo se muestra si el índice activo es mayor a 0
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline /> {/* Ícono de flecha hacia la izquierda */}
        </button>
      )}
      {/* Mapear los elementos hijos para mostrar cada uno en su posición correspondiente */}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            '--active': i === active ? 1 : 0, // Determina si el elemento es el activo
            '--offset': (active - i) / 3, // Controla el desplazamiento del elemento
            '--direction': Math.sign(active - i), // Controla la dirección del movimiento
            '--abs-offset': Math.abs(active - i) / 3, // Desplazamiento absoluto para efectos de transición
            'pointer-events': active === i ? 'auto' : 'none', // Solo permitir clics en el elemento activo
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1', // Oculta los elementos que están fuera del rango de visibilidad
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block', // Esconde los elementos que no deben ser mostrados
          } as React.CSSProperties} // Convertir en propiedades de CSS
        >
          {child} {/* Renderizar el elemento hijo */}
        </div>
      ))}
      {active < count - 1 && ( // Botón de navegación a la derecha, solo se muestra si no se ha alcanzado el último elemento
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline /> {/* Ícono de flecha hacia la derecha */}
        </button>
      )}
    </div>
  );
};

export default Carousel;
