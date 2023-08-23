/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update the import
import { Provider } from 'react-redux';
import store from './redux/store';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import LoginForm from './components/sessions/LoginForm';
import RegistrationForm from './components/sessions/RegistrationForm';
// import AddHouse from './components/addHouse';
import "./styling/HousesList.css"
import "./styling/HomePage.css"
// import { useState } from 'react';

const App = () => (

  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
