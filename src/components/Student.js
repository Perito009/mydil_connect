import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Student.css';

const Student = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Requête POST vers le backend
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.status === 200) {
        // Rediriger l'utilisateur selon son rôle
        if (data.role === 'student') {
          navigate('/reservation');
        } else if (data.role === 'prof') {
          navigate('/prof');
        }
      } else {
        setError(data.message); // Afficher l'erreur du backend
      }
    } catch (err) {
      console.error('Erreur lors de la connexion:', err);
      setError('Une erreur est survenue lors de la connexion.');
    }
  };

  return (
    <div className="homepage-container">
      <div className="left-section">
        <h1 className="title">
          <span className="mydil">My</span>
          <span className="connect">DilConnect</span>
        </h1>
        
        <div className="formulaire">
          <form onSubmit={handleLogin}>
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrer votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  {/* Icône pour afficher/masquer le mot de passe */}
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
                <label htmlFor="rememberMe">Se rappeler de moi</label>
              </div>
              <a href="#forgot-password">Mot de passe oublié ?</a>
            </div>

            <button
              type="submit"
              className="btn-login"
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
          </form>
        </div>
      </div>

      <div className="right-section">
        <img src="logo.png" alt="MyDIL Logo" className="logo" />
      </div>
    </div>
  );
};

export default Student;
