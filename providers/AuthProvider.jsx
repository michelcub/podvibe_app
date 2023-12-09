import React, { createContext, useContext, useState } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

// Provider que envuelve tu aplicación y provee el estado de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simula un login
  const logIn = (username, password) => {
    // Aquí deberías agregar tu lógica de autenticación
    // Por ejemplo, una petición a una API de autenticación
    // Si es exitoso, establecer el usuario
    const fakeUser = { id: 1, name: 'John Doe', username: username };
    setUser(fakeUser);
  };

  // Simula un logout
  const logOut = () => {
    // Aquí limpiarías el usuario y posiblemente otros estados de la sesión
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth