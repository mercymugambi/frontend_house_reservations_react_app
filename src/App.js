/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update the import
import { Provider } from 'react-redux';
import store from './redux/store';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import LoginForm from './components/sessions/LoginForm';
import RegistrationForm from './components/sessions/RegistrationForm';
import HouseForm from './components/addHouse';
import "./styling/HousesList.css"
import "./styling/HomePage.css"
import HouseDetails from './components/HouseDetails';
import DeleteItem from './components/DeleteItem';

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
        <Route path="/deletehouse" element={<DeleteItem />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
