

import { FaGoogle, FaUser} from 'react-icons/fa';


// eslint-disable-next-line react/prop-types
const Login = ({ isOpen, onClose}) => {
  
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Cierra el modal si se hace clic en el fondo oscuro
    }
  };

  return (
    
     <div className="login-dialog" onClick={handleOverlayClick} >
      
      <div className="login-content">
        <h2> <FaUser className='icon'/>Login</h2> 
        <div className="message"><div className="line"></div> Registrarse aquí <div className="line"></div>
      
        </div>
        <button className="signup-button">
        <FaGoogle className='icon-footer'/> Sign up with Google
        </button>
        <input className="login-input" type="email" placeholder="Email" />
        <input className="login-input" type="password" placeholder="Contraseña" />

        <button className="login-button">Iniciar sesión</button>
        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <div className="create-account">
          ¿No tienes una cuenta? <a href="#">Crear aquí</a>
        </div>
        
      </div>
      </div>
      
  );
};
 export default Login;