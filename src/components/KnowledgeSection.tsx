import React from 'react';

const KnowledgeSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Conocimientos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <span className="badge bg-yellow-500 text-white p-2 rounded">Icono</span>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-semibold">React</h3>
            <span className="badge bg-blue-500 text-white p-2 rounded">Icono</span>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-semibold">Node.js</h3>
            <span className="badge bg-green-500 text-white p-2 rounded">Icono</span>
          </div>
          {/* Añadir más conocimientos aquí */}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
