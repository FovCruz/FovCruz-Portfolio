import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth.tsx'; // Importa el hook de autenticación

// Componente de Login
const Login = () => {
  // Estados locales para manejar el nombre de usuario y la contraseña
  const [username, setUsername] = useState(''); // Guarda el nombre de usuario
  const [password, setPassword] = useState(''); // Guarda la contraseña
  const { login } = useAuth(); // Usa el hook de autenticación para acceder a la función de login
  const navigate = useNavigate(); // Hook para navegar a otras rutas

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    login(username, password); // Llama a la función de login con el nombre de usuario y contraseña
    navigate('/admin/projects'); // Redirige a la página de administración si el login es exitoso
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {/* Campo de entrada para el nombre de usuario */}
      <div className="mb-4">
        <label className="block text-gray-700">Usuario</label>
        <input
          className="w-full p-2 border"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Actualiza el estado con el valor del input
          required
        />
      </div>
      {/* Campo de entrada para la contraseña */}
      <div className="mb-4">
        <label className="block text-gray-700">Contraseña</label>
        <input
          className="w-full p-2 border"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con el valor del input
          required
        />
      </div>
      {/* Botón para enviar el formulario */}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Iniciar sesión
      </button>
    </form>
  );
};

export default Login;
