
import React from 'react';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';
import {  useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Login = ({ isOpen, onClose, setIsLoggedIn }) => {
  const [ session, setSession ] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) {
    return null;
  }

  

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Cierra el modal si se hace clic en el fondo oscuro
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/usuarios/login', { email, password });
      
      const session = {
        id: response.data._id,
        nombre: response.data.nombre,
        email: response.data.email,
      };
      //setSession(session);

      console.log(session); 

      localStorage.setItem('session', JSON.stringify(session));

      alert(response.data.msg);

      setIsLoggedIn(true);
      window.location.reload();
      onClose();

    } catch (error) {
      if (error.response.message) {
        setMessage(error.response.message);
      } else {
        setMessage('Error al registrarse, verifica tus credenciales o confirma tu cuenta');
      }
      setIsSuccess(false);
      console.error(error.response.message);
    }
  };

  const messageStyle = {
    color: isSuccess ? 'green' : 'red',
    marginTop: '10px'
  };

  return (
    
     <div className="login-dialog" onClick={handleOverlayClick} >
      
      <div className="login-content">
        <h2> <FaUser className='icon'/>Login</h2> 
        <div className="message">
          <div className="line"></div> 
          Registrarse aquí 
          <div className="line"></div>
        </div>

        {message && (
          <div style={messageStyle}>
            {message}
          </div>
        )}
        
        <input 
          className="login-input" 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <input 
          className="login-input" 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
        <div className="create-account">
          ¿No tienes una cuenta? <Link to="/Register">Crear aquí</Link>
        </div>
        
      </div>
      </div>
      
  );
};
export default Login;