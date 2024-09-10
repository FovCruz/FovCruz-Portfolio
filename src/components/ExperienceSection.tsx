const ExperienceSection: React.FC = () => {
    const experience = [
      {
        company: 'Empresa XYZ',
        position: 'Desarrollador Web',
        description: 'Desarrollé aplicaciones web usando React y Node.js',
        period: '2020 - 2023',
      },
    ];
  
    return (
      <section id="experience" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Experiencia Laboral</h2>
        <div className="container mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold">{exp.position} en {exp.company}</h3>
              <p className="text-gray-700">{exp.description}</p>
              <p className="text-gray-500">{exp.period}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ExperienceSection;
  