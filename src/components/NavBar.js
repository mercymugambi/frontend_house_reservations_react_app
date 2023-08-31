import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaPinterestP, FaVimeoV, FaGooglePlusG } from 'react-icons/fa';
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
        <div className="logo">
          <div className="content">
            <h2>
              Classic Rental
              <br />
              Houses
            </h2>
          </div>
        </div>
        <div className="links">
          <li className={`${params.pathname.split('/')[1] === 'homepage' && 'active'}`}>
            <Link className="link" to="/homepage">
              HOME PAGE
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'ReservationForm' && 'active'
            }`}
          >
            <Link className="link" to="/reservation-form">
              MAKE RESERVATION
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'ReservationList' && 'active'
            }`}
          >
            <Link className="link" to="/reservations">
              MY RESERVATIONS
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'add-house' && 'active'
            }`}
          >
            <Link className="link" to="/add-house">
              ADD HOUSE
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'delete-house' && 'active'
            }`}
          >
            <Link className="link" to="/delete-house">
              DELETE HOUSE
            </Link>
          </li>
        </div>
        <div className="lower-nav">
          <li>
            <Link className="link" onClick={logOut} to="/">
              Log Out
            </Link>
          </li>
          <li>
            <ul className="social">
              <li>
                <Link to="/#">
                  <BsTwitter className="social-logo" />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoFacebook />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <FaGooglePlusG />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <FaVimeoV />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
          </li>
          <li className="copyright">
            <p>© Microverse 2023</p>
          </li>
        </div>
      </ul>
    </>
  );
};

export default NavBar;
