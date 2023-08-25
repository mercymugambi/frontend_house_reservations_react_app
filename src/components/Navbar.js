import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/homepage">Houses</Link>
        </li>
        <li>
          <Link to="/reserve">Reserve</Link>
        </li>
        <li>
          <Link to="/my-reservations">My Reservations</Link>
        </li>
        <li>
          <Link to="/add-House">Add House</Link>
        </li>
        <li>
          <Link to="/delete-house">Delete House</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
