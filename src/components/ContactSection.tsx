const ContactSection: React.FC = () => {
    return (
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Contacto</h2>
        <div className="container mx-auto">
          <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <input className="w-full p-2 border" type="text" placeholder="Tu nombre" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input className="w-full p-2 border" type="email" placeholder="Tu correo" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mensaje</label>
              <textarea className="w-full p-2 border" rows={4} placeholder="Tu mensaje"></textarea>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  