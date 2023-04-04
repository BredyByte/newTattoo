import React from 'react';
import { Home, ContactUs } from './pages';
import { Preloader } from './sections/Preloader';
// import { HashRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      {/*<Home />*/}
      <ContactUs />
    </div>
  );
};
