import React, { useEffect } from 'react';

const Navbar: React.FC = () => {
  useEffect(() => {
    // Clase para implementar la navegación sticky (fija) con el slider
    class StickyNavigation {
      currentId: string | null = null; // ID actual de la sección visible
      currentTab: HTMLElement | null = null; // Pestaña actual
      tabContainerHeight = 70; // Altura del contenedor de pestañas

      constructor() {
        // Asignar eventos de clic a cada pestaña de navegación
        document.querySelectorAll('.et-hero-tab').forEach((tab) => {
          tab.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el comportamiento por defecto del clic
            const element = tab as HTMLAnchorElement;
            const section = document.querySelector(element.getAttribute('href')!) as HTMLElement;

            if (section) {
              // Calcular el desplazamiento de la página para llegar a la sección
              const scrollTop = section.offsetTop - this.tabContainerHeight + 1;
              window.scrollTo({ top: scrollTop, behavior: 'smooth' }); // Desplazamiento suave
            }
          });
        });

        // Añadir eventos para el desplazamiento y cambio de tamaño de la ventana
        window.addEventListener('scroll', this.onScroll.bind(this));
        window.addEventListener('resize', this.onResize.bind(this));
      }

      // Función que se ejecuta al hacer scroll
      onScroll() {
        this.checkTabContainerPosition(); // Revisar la posición del contenedor de pestañas
        this.findCurrentTabSelector(); // Encontrar la pestaña visible actual
      }

      // Función que se ejecuta al cambiar el tamaño de la ventana
      onResize() {
        if (this.currentId) {
          this.setSliderCss(); // Ajustar el slider si hay una pestaña activa
        }
      }

      // Verifica si el contenedor de pestañas debe estar fijo en la parte superior
      checkTabContainerPosition() {
        const tabContainer = document.querySelector('.et-hero-tabs-container') as HTMLElement;
        const tabs = document.querySelector('.et-hero-tabs') as HTMLElement;
        const offset = tabs.offsetTop + tabs.clientHeight - this.tabContainerHeight;
        if (window.scrollY > offset) {
          tabContainer.classList.add('et-hero-tabs-container--top'); // Añadir clase para fijar
        } else {
          tabContainer.classList.remove('et-hero-tabs-container--top'); // Quitar la clase de fijado
        }
      }

      // Encuentra la pestaña actual según la sección visible en la pantalla
      findCurrentTabSelector() {
        let newCurrentId: string | null = null;
        let newCurrentTab: HTMLElement | null = null;
        document.querySelectorAll('.et-hero-tab').forEach((tab) => {
          const id = tab.getAttribute('href')!;
          const section = document.querySelector(id) as HTMLElement;

          if (section) {
            // Calcular el rango visible de la sección
            const offsetTop = section.offsetTop - this.tabContainerHeight;
            const offsetBottom = section.offsetTop + section.clientHeight - this.tabContainerHeight;

            // Verificar si la sección está visible en el viewport
            if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
              newCurrentId = id;
              newCurrentTab = tab as HTMLElement;
            }
          }
        });

        // Si la pestaña actual cambia, se actualiza el slider
        if (this.currentId !== newCurrentId || this.currentId === null) {
          this.currentId = newCurrentId;
          this.currentTab = newCurrentTab;
          this.setSliderCss(); // Ajustar el slider
        }
      }

      // Ajusta la posición y tamaño del slider debajo de la pestaña activa
      setSliderCss() {
        const slider = document.querySelector('.et-hero-tab-slider') as HTMLElement;
        if (this.currentTab) {
          const width = this.currentTab.offsetWidth; // Ancho de la pestaña activa
          const left = this.currentTab.offsetLeft; // Posición de la pestaña activa
          slider.style.width = `${width}px`; // Ajusta el ancho del slider
          slider.style.left = `${left}px`; // Ajusta la posición del slider
        }
      }
    }

    // Inicializa la navegación sticky cuando el componente se monta
    new StickyNavigation();
  }, []);

  return (
    <section className="et-hero-tabs relative flex flex-col justify-center items-center h-screen bg-gray-200">
      {/* Contenido del slider con una imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img src="/path/to/your-image1.jpg" alt="Slider Image 1" className="w-full h-full object-cover" />
      </div>

      {/* Texto encima del slider */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-3xl tracking-wide">STICKY SLIDER NAV</h1>
        <h3 className="text-xl tracking-widest opacity-60">Sliding content with sticky tab nav</h3>
      </div>

      {/* Contenedor de las pestañas de navegación */}
      <div className="et-hero-tabs-container flex absolute bottom-0 w-full h-[70px] shadow-lg bg-white z-10">
        {/* Logo o texto que redirige al inicio */}
        <a href="#top" className="flex items-center justify-start px-4">
          <span className="text-xl font-bold text-blue-500 hover:text-blue-600">Mi Portafolio</span>
        </a>

        {/* Pestañas de navegación */}
        <a className="et-hero-tab flex-1 flex justify-center items-center hover:bg-blue-500 hover:text-white" href="#proyectos">Proyectos</a>
        <a className="et-hero-tab flex-1 flex justify-center items-center hover:bg-blue-500 hover:text-white" href="#conocimientos">Conocimientos</a>
        <a className="et-hero-tab flex-1 flex justify-center items-center hover:bg-blue-500 hover:text-white" href="#experiencia">Experiencia</a>
        <a className="et-hero-tab flex-1 flex justify-center items-center hover:bg-blue-500 hover:text-white" href="#contacto">Contacto</a>
        <a className="et-hero-tab flex-1 flex justify-center items-center hover:bg-blue-500 hover:text-white" href="#sobremi">Sobre Mí</a>

        {/* Slider que indica la pestaña seleccionada */}
        <span className="et-hero-tab-slider absolute bottom-0 h-[6px] bg-blue-400 transition-all duration-300"></span>
      </div>
    </section>
  );
};

export default Navbar;
