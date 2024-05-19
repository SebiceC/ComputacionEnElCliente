import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';


const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:7500/api/usuarios/registrar', { nombre: username, email, password });
          console.log(response.data); // Manejar la respuesta del backend
          setIsSuccess(true);
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
  );
};

export default Register;
