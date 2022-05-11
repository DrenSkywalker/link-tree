import React from 'react';

import {useApp} from './context/app.context';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Background from './components/Background';

const App = () => {
  const {
    state: {currentTheme},
  } = useApp();

  return (
    <div className="app" data-theme={currentTheme}>
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
