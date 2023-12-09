import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import AppNavigation from './routing/AppNavigation';


const App = () => {

  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
