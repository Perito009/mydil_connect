import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Pour rediriger vers Reservation.js
import './Student.css';

const Student = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();  // Hook de React Router pour la redirection

  // Fonction pour afficher ou masquer le mot de passe
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLogin = (e) => {
    e.preventDefault();

    // Simuler la vérification de l'email et du mot de passe
    const correctEmail = "test@mydil.com";
    const correctPassword = "password123";

    if (email === correctEmail && password === correctPassword) {
      // Rediriger vers la page de réservation en cas de succès
      navigate('/reservation');
    } else {
      // Afficher un message d'erreur si la connexion échoue
      setError("Email ou mot de passe incorrect.");
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
                onChange={(e) => setEmail(e.target.value)}  // Stocker l'email dans le state
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
                  onChange={(e) => setPassword(e.target.value)}  // Stocker le mot de passe dans le state
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
