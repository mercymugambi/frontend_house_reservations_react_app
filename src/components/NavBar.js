import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import
import '../styling/NavBar.css';

const NavBar = () => {
  const params = useLocation();
  const [open, setOpen] = useState(true);

  const logOut = () => {
    localStorage.removeItem('username');
  };

  useEffect(() => {
    setOpen(true);
  }, [params]);

  const isSplashPage = params.pathname === '/';

  if (!open || isSplashPage) {
    return null; // Don't render the navbar on the SplashPage
  }

  // Check if it's the login page
  const isLoginPage = params.pathname === '/login';

  if (!open || isLoginPage) {
    // Don't render the navbar on the login page
    return null;
  }

  // Check if it's the login page
  const isRegisterPage = params.pathname === '/register';

  if (!open || isRegisterPage) {
    // Don't render the navbar on the login page
    return null;
  }

  return (
    <>
      <div className="mobile">
        <button
          className="ham-menu"
          type="button"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg viewBox="0 0 100 80" width="40" height="40" fill="black">
              <rect width="100" height="10" />
              <rect y="30" width="100" height="10" />
              <rect y="60" width="100" height="10" />
            </svg>
          ) : (
            <p className="close-btn">X</p>
          )}
        </button>
      </div>
      <ul className={`nav ${open && 'open'}`}>
        <li className="logo">
          <div className="content">
            <h2>
              Classic Rental
              <br />
              Houses
            </h2>
          </div>
        </li>
        <span className="links">
          <li className={`${params.pathname.split('/')[1] === 'homepage' && 'active'}`}>
            <Link className="link" to="/homepage">
              Houses
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'ReservationForm' && 'active'
            }`}
          >
            <Link className="link" to="/ReservationForm">
              Reserve
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'ReservationList' && 'active'
            }`}
          >
            <Link className="link" to="/ReservationList">
              My Reservations
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'add-house' && 'active'
            }`}
          >
            <Link className="link" to="/add-house">
              Add House
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'delete-house' && 'active'
            }`}
          >
            <Link className="link" to="/delete-house">
              Delete House
            </Link>
          </li>
          <li>
            <Link className="link" onClick={logOut} to="/">
              Log Out
            </Link>
          </li>
        </span>
        <li>
          <ul className="social">
            <li>
              <Link to="/#">
                <img className="social-logo" src="/images/x.webp" alt="x" />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <img
                  className="social-logo"
                  src="/images/facebook.webp"
                  alt="facebook"
                />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <img
                  className="social-logo"
                  src="/images/instagram.webp"
                  alt="instagram"
                />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <img
                  className="social-logo"
                  src="/images/pintrest.png"
                  alt="pintrest"
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className="copyright">
          <p>© Microverse 2023</p>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
