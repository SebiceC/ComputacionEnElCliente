

import { FaUser } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Login = ({ isOpen, onClose, setIsLoggedIn }) => {

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

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7500/api/usuarios/login', { email, password });
      alert('acceso exitoso');
      setIsLoggedIn(true);
      onClose();
      console.log(response.data); // Manejar la respuesta del backend
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        setMessage(error.response.data.msg);
      } else {
        setMessage('Error al registrarse, verifica tus credenciales o confirma tu cuenta');
      }
      setIsSuccess(false);
      console.error(error);
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
        <div className="forgot-password">
          <Link to="/olvide-password">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="create-account">
          ¿No tienes una cuenta? <Link to="/Register">Crear aquí</Link>
        </div>
        
      </div>
      </div>
      
  );
};
export default Login;