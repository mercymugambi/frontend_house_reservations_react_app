import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationList from './components/ReservationsList';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<ReservationList />} />
    </Routes>
  </Router>
);

export default App;
