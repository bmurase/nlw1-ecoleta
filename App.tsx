import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar />
      <Home />
    </>
  );
};

export default App;
