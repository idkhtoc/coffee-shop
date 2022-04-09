import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/app/app';
import OurCoffee from './components/ourCoffee/ourCoffee';
import ForPleasure from './components/forPleasure/forPleasure';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/ourcoffee" element={<OurCoffee/>} />
      <Route path="/forpleasure" element={<ForPleasure/>} />
    </Routes>
  </BrowserRouter>
);