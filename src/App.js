/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddHouse from './pages/addHouse';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<AddHouse />} />
    </Routes>
  </Router>
);

export default App;
