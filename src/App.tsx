import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProjectForm from './components/ProjectForm.tsx';
import Login from './components/Login.tsx';
import AdminProjectList from './components/AdminProjectList.tsx';
import EditProject from './components/EditProject.tsx';  // Componente para editar proyectos
import { useAuth } from './auth.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import KnowledgeSection from './components/KnowledgeSection.tsx';
import ExperienceSection from './components/ExperienceSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import './carousel.scss';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="container mx-auto py-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="proyectos" className="et-slide h-screen bg-gray-200 flex flex-col justify-center items-center">
                    <ProjectsSection />
                  </section>
                  <section id="conocimientos" className="et-slide h-screen bg-gray-200 flex flex-col justify-center items-center">
                    <h1 className="text-4xl">Conocimientos</h1>
                    <KnowledgeSection />
                  </section>
                  <section id="experiencia" className="et-slide h-screen bg-gray-200 flex flex-col justify-center items-center">
                    <h1 className="text-4xl">Experiencia</h1>
                    <ExperienceSection />
                  </section>
                  <section id="contacto" className="et-slide h-screen bg-gray-200 flex flex-col justify-center items-center">
                    <h1 className="text-4xl">Contacto</h1>
                    <ContactSection />
                  </section>
                  <section id="sobremi" className="et-slide h-screen bg-gray-200 flex flex-col justify-center items-center">
                    <h1 className="text-4xl">Sobre Mí</h1>
                    <p>Me llamo Fabian Valencia Cruz, ingeniero informático con habilidades Fullstack.</p>
                    <p>Obtenidas en Desafio latam en el bootcamp FullStack Python.</p>
                  </section>
                </>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/admin/projects" element={isAuthenticated ? <AdminProjectList /> : <Navigate to="/login" />} />
            <Route path="/admin/create" element={isAuthenticated ? <ProjectForm /> : <Navigate to="/login" />} />
            {/* Nueva ruta para editar proyectos */}
            <Route path="/admin/edit/:id" element={isAuthenticated ? <EditProject /> : <Navigate to="/login" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
