import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import LoginForm from './components/sessions/LoginForm';
import RegistrationForm from './components/sessions/RegistrationForm';
import HouseForm from './components/addHouse';
import './styling/HousesList.css';
import './styling/HomePage.css';
import HouseDetails from './components/HouseDetails';
import ReservationsList from './components/ReservationsList';
import ReservationForm from './components/ReservationForm';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/add-house" element={<HouseForm />} />
        <Route path="/house/:id" element={<HouseDetails />} />
        <Route exact path="/reservations" element={<ReservationsList />} />
        <Route exact path="/reservation-form" element={<ReservationForm />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
