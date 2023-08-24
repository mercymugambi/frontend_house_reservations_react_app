import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update the import
import { Provider } from 'react-redux';
import store from './redux/store';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import LoginForm from './components/sessions/LoginForm';
import RegistrationForm from './components/sessions/RegistrationForm';
import HouseDetails from './components/HouseDetails';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/house/:id" element={<HouseDetails />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
