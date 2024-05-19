
import { useState } from 'react';
import Login from './Login';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../assets/vector.svg';
import logowhite from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMicrophone, faSearch, faUser, faHouse, faLocationDot, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';




const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <div className="overlay" >
          <div className="side-menu">
          <img className='logo-tougle'
    src={logowhite}
    alt="MixShop Logo"
    style={{ width: '70px', height: 'auto' }}
  />

<ul className="side-menu-list">
  <li className="side-menu-item">
    <Link className="side-menu-link"to="/">
      <div>Categorias</div>
    </Link>
  </li>
  <li className="side-menu-item">
    <Link className="side-menu-link" to="/">
      <div>Ofertas</div>
    </Link>
  </li>
  <li className="side-menu-item">
    <Link className="side-menu-link" to="/aboutus">
      <div>¿Quienes Somos?</div>
    </Link>
  </li>
</ul>

  <button className="close-button" onClick={toggleMenu}>
    X
  </button>
        
          </div>
          </div>
          
        )}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="MixShop Logo"
            style={{ width: '70px', height: 'auto',margin:'0px' }}
          />ixShop
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
      <Link className="nav-icon position-relative text-decoration-none" to="/userProfile">
        <FontAwesomeIcon icon={faUserCircle} className="fa-fw text-dark mr-3" />
      </Link>
      ) : (
        <Link className="nav-icon position-relative text-decoration-none" onClick={() => setIsModalOpen(true)}>
          <FontAwesomeIcon icon={faUser} className="fa-fw text-dark mr-3" />
        </Link>
    )}
      <Link to="/Cart" className="nav-icon position-relative text-decoration-none">
        <FontAwesomeIcon icon={faCartShopping} className="fa-fw text-dark mr-3" />
      </Link>
          </div>
      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setIsLoggedIn={setIsLoggedIn} ></Login>
      <Outlet/>
    </nav>
    
  );
};

export default NavBar;
