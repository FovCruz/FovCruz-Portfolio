import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir los tipos para el contexto
interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

// Crear un contexto vacío con el tipo definido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente proveedor de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    // Simulación de autenticación
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
    }
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
