import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir los tipos para el contexto de autenticación
interface AuthContextType {
  isAuthenticated: boolean; // Indica si el usuario está autenticado
  login: (username: string, password: string) => void; // Función para iniciar sesión
  logout: () => void; // Función para cerrar sesión
}

// Crear un contexto vacío con el tipo definido para la autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente proveedor de autenticación que envolverá a los componentes hijos
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado que controla si el usuario está autenticado o no

  // Función para iniciar sesión (login) que actualiza el estado de autenticación
  const login = (username: string, password: string) => {
    // Simulación de autenticación con credenciales estáticas
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true); // Autentica al usuario si las credenciales son correctas
    }
  };

  // Función para cerrar sesión (logout) que actualiza el estado de autenticación
  const logout = () => setIsAuthenticated(false);

  // Proveedor que envuelve a los componentes hijos, brindándoles acceso al contexto de autenticación
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext); // Obtener el contexto de autenticación
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider'); // Asegura que el hook solo se use dentro del proveedor
  }
  return context; // Devuelve el contexto de autenticación
};
