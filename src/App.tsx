import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PublicProjectList from './components/PublicProjectList.tsx';
import ProjectForm from './components/ProjectForm.tsx';
import Login from './components/Login.tsx';
import AdminProjectList from './components/AdminProjectList.tsx';
import { useAuth } from './auth.tsx';  // Importa el hook de autenticación

function App() {
  const { isAuthenticated } = useAuth();  // Verifica si el usuario está autenticado

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-3xl">Portafolio</h1>
        </header>
        <main className="container mx-auto py-8">
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<PublicProjectList />} />
            <Route path="/login" element={<Login />} />

            {/* Rutas privadas (solo accesibles si está autenticado) */}
            <Route path="/admin/projects" element={isAuthenticated ? <AdminProjectList /> : <Navigate to="/login" />} />
            <Route path="/admin/create" element={isAuthenticated ? <ProjectForm /> : <Navigate to="/login" />} />
            <Route path="/admin/edit/:id" element={isAuthenticated ? <ProjectForm /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
