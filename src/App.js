/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddHouse from './pages/addHouse';
import HouseList from './pages/showHouses';
import { useState } from 'react';

const App = () => {

  const [dataList, setDataList] = useState([]);

  return(
  <Router>
    <Routes>
      <Route exact path="/" element={<AddHouse />} />
      <Route exact path="/houses-list" element={<HouseList dataList={dataList} />} />
    </Routes>
  </Router>
    )
};

export default App;
