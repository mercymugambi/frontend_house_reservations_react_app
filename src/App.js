// App.js

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import LoginForm from './components/sessions/LoginForm';
import RegistrationForm from './components/sessions/RegistrationForm';
import HouseForm from './components/addHouse';
import HouseDetails from './components/HouseDetails';
import ReservationsList from './components/ReservationsList';
import ReservationForm from './components/ReservationForm';
import { fetchHouses } from './redux/houses/housesSlice';
import NavBar from './components/NavBar';

const App = () => {
  const dispatch = useDispatch();
  const [loginPage, setLoginPage] = useState(false);

  // Fetch houses on component mount
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  useEffect(() => {
    // Determine if it's the login page based on the route
    setLoginPage(window.location.pathname === '/login');
  }, []);

  return (
    <Router>
      <div className="main">
        {/* Conditionally render the NavBar */}
        {window.location.pathname !== '/' && !loginPage && (
          <div className="navbar-container">
            <div className="left-nav">
              <NavBar />
            </div>
            <div className="content">
              <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/add-house" element={<HouseForm />} />
                <Route path="/house/:id" element={<HouseDetails />} />
                <Route exact path="/reservations" element={<ReservationsList />} />
                <Route exact path="/reservation-form" element={<ReservationForm />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
