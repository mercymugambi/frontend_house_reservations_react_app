import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import Navbar from './Navbar';
import Houses from './Houses';

const HomePage = () => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Houses} />
      </Routes>
      <h2>
        Hello
        {userData.name}
        {' '}
        Welcome to the Homepage
      </h2>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
