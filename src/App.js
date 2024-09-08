function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white fixed top-0 left-0 w-full shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold">Mi Portafolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#proyectos" className="hover:underline">Proyectos</a></li>
              <li><a href="#habilidades" className="hover:underline">Habilidades</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Ajustar margen superior para que el contenido no esté cubierto por el header */}
      <main className="pt-16">
        {/* Sección de Proyectos */}
        <section id="proyectos" className="py-10">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Mis Proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Proyecto 1</h3>
                <p className="text-gray-600">Descripción breve del proyecto 1.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Proyecto 2</h3>
                <p className="text-gray-600">Descripción breve del proyecto 2.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Proyecto 3</h3>
                <p className="text-gray-600">Descripción breve del proyecto 3.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Sección de Habilidades */}
        <section id="habilidades" className="py-10 bg-gray-200">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Habilidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow text-center">
                <h3 className="text-lg font-semibold">JavaScript</h3>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <h3 className="text-lg font-semibold">React</h3>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <h3 className="text-lg font-semibold">Node.js</h3>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <h3 className="text-lg font-semibold">MongoDB</h3>
              </div>
            </div>
          </div>
        </section>


        {/* Sección de Contacto */}
        <section id="contacto" className="py-10">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Contacto</h2>
            <form className="max-w-lg mx-auto bg-white p-6 rounded shadow">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  id="email"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-6">
            <p>Sígueme en mis redes sociales:</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/fabian-osvaldo-cruz/" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/FovCruz" className="text-gray-800 hover:underline" target="_blank" rel="noreferrer">
                GitHub
              </a>
              {/* Agrega más enlaces si lo deseas */}
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default App;
