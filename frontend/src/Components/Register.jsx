import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/api/usuarios/', { nombre: username, email, password });
          setIsSuccess(true);
          alert(response.data.msg);
          console.log(response.data); 
          navigate('/'); 
        } catch (error) {
            if (error.response && error.response.data && error.response.data.msg) {
                setMessage(error.response.data.msg);
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="login-content">
          <h2><FaUser className='icon'/>Register</h2>
          <div className="message">
              <div className="line"></div> 
              Registrate aquí 
              <div className="line"></div>
          </div>

          {message && (
                  <div style={messageStyle}>
                      {message}
                  </div>
              )}

          <input 
            className="login-input"
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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

          <button className="login-button" onClick={handleRegister}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Register;
