import React from 'react';
import { Home, ContactUs } from './pages';
import { Preloader } from './sections/Preloader';
import { HashRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactUs />} />
        {/*<Route path="services" element={<ServicesAdditionalPage />} />*/}
        {/*<Route path="*" element={<NotFoundPage />} />*/}
      </Routes>
    </HashRouter>
  );
};
