import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7500/api/usuarios/olvide-password', { email });
      setIsSuccess(true);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        setMessage(error.response.data.msg);
      }
      setIsSuccess(false);
    }
  };

  return (
    <div className="reset-password-content">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && (
        <div style={{ color: isSuccess ? 'green' : 'red' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
