import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationsList from './components/ReservationsList';
import ReservationForm from './components/ReservationForm';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<ReservationsList />} />
      <Route exact path="/reservations" element={<ReservationsList />} />
      <Route exact path="/reservation-form" element={<ReservationForm />} />
    </Routes>
  </Router>
);

export default App;
