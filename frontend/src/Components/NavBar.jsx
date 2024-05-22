import { useState, useEffect } from 'react';
import Login from './Login';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../assets/vector.svg';
import logowhite from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMicrophone, faSearch, faUser, faHouse, faLocationDot, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedSession = JSON.parse(localStorage.getItem('session'));
    if (storedSession && storedSession.id) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    setIsLoggedIn(false);
    alert('Cerrado Sesion correctamente');
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <button
          className={`navbar-toggler border-0 d-lg-block ${isMenuOpen ? 'active' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {isMenuOpen && (
          <div className="overlay">
            <div className="side-menu">
              <img className='logo-tougle' src={logowhite} alt="MixShop Logo" style={{ width: '70px', height: 'auto' }} />
              <ul className="side-menu-list">
                <li className="side-menu-item">
                  <Link className="side-menu-link" to="/aboutus">
                    <div>¿Quienes Somos?</div>
                  </Link>
                </li>
              </ul>
              <button className="close-button" onClick={toggleMenu}>X</button>
            </div>
          </div>
        )}

        <Link className="navbar-brand" to="/">
          <img src={logo} alt="MixShop Logo" style={{ width: '70px', height: 'auto', margin: '0px' }} />ixShop
        </Link>

        <Link className="nav-icon position-relative text-decoration-none" to="/api">
          <FontAwesomeIcon icon={faLocationDot} className="location" />
        </Link>

        <div className="google-search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" className="search-input" placeholder="¿Qué buscas hoy?" />
          <FontAwesomeIcon icon={faMicrophone} className="microphone-icon" />
        </div>

        <Link to="/" className="nav-icon position-relative text-decoration-none">
          <FontAwesomeIcon icon={faHouse} className="fa-fw text-dark mr-3" />
        </Link>

        {isLoggedIn ? (
          <div 
            className="dropdown" 
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => document.getElementById('dropdown-menu').style.display = 'block'}
            onMouseLeave={() => document.getElementById('dropdown-menu').style.display = 'none'}
          >
            <Link className="nav-icon position-relative text-decoration-none" to="#" id="userMenu" role="button" style={{ display: 'inline-block' }}>
              <FontAwesomeIcon icon={faUserCircle} className="fa-fw text-dark mr-3" />
            </Link>
            <div id="dropdown-menu" className="dropdown-menu" style={{ display: 'none', position: 'absolute', backgroundColor: '#f9f9f9', minWidth: '160px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 }}>
              <button className="dropdown-item" onClick={handleLogout} style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block', backgroundColor: '#f9f9f9' }}>
                <FontAwesomeIcon icon={faSignOutAlt} className="fa-fw mr-2" /> Cerrar sesión
              </button>
            </div>
          </div>
        ) : (
          <Link className="nav-icon position-relative text-decoration-none" onClick={() => setIsModalOpen(true)}>
            <FontAwesomeIcon icon={faUser} className="fa-fw text-dark mr-3" />
          </Link>
        )}

        <Link to="/Cart" className="nav-icon position-relative text-decoration-none">
          <FontAwesomeIcon icon={faCartShopping} className="fa-fw text-dark mr-3" />
        </Link>
      </div>

      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
    </nav>
  );
};

export default NavBar;
