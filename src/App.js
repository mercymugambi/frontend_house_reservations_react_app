import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationList from './components/ReservationsList';
import reservationForm from './components/ReservationForm';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/reservation-list" element={<ReservationList />} />
      <Route exact path="/reservation-form" element={<ReservationForm />} />
    </Routes>
  </Router>
);

export default App;
