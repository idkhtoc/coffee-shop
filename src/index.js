import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/app/app';
import OurCoffee from './components/ourCoffee/ourCoffee';
import ForPleasure from './components/forPleasure/forPleasure';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/ourcoffee" element={<OurCoffee/>} />
      <Route path="/forpleasure" element={<ForPleasure/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);