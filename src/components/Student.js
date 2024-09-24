import React, { useState } from 'react';
import './Student.css';

const Student = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="homepage-container">
      <div className="left-section">
        <h1 className="title">
          <span className="mydil">My</span>
          <span className="connect">DilConnect</span>
        </h1>
        <div className="formulaire">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Entrer votre email" />
          </div>

          <div>
            <label htmlFor="password">Mot de passe</label>
            <div style={{ position: 'relative' }}>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Entrer votre mot de passe"
                style={{ paddingRight: '40px' }}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Ce rapeller de moi</label>
            </div>
            <a href="#forgot-password">Mot de passe oublier?</a>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '10px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Login
          </button>
        </div>
      </div>

      <div className="right-section">
        <img src="logo.png" alt="MyDIL Logo" className="logo" />
      </div>
    </div>
  );
};

export default Student;
