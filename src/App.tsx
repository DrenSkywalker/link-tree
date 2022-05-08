import React from 'react';

import {useApp} from './context/app.context';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import CustomParticles from './components/CustomParticles';

const App = () => {
  const {
    state: {currentTheme},
  } = useApp();

  return (
    <div className="app" data-theme={currentTheme}>
      <CustomParticles />

      <Header />

      <main className="mt-14 mb-7">
        <Card />
      </main>

      <Footer />
    </div>
  );
};

export default App;

/*
      <Header />

      <main className="mt-14 mb-7">
        <Card />
      </main>

      <Footer />
      */
