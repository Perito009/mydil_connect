import React from 'react';
import './Prof.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate

const Prof = () => {
  const tools = [
    { name: 'Imprimante 3D', version: '1.0', mode: 'Automatique', statut: 'Disponible', description: 'Imprimante 3D de dernière génération.' },
    { name: 'Arduino', version: '2.1', mode: 'Manuel', statut: 'Indisponible', description: 'Kit Arduino pour prototypage.' },
    { name: 'Casque VR', version: '3.0', mode: 'Automatique', statut: 'Disponible', description: 'Casque de réalité virtuelle.' }
  ];

  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleAddTool = () => {
    // Logique pour ajouter un nouvel outil
    console.log('Outil ajouté');
  };

  const handleRemoveTool = (tool) => {
    // Logique pour retirer un outil
    console.log(`Outil supprimé: ${tool.name}`);
  };

  const handleBellClick = () => {
    navigate('/DemandeReservation'); // Redirige vers la page DemendeReservation.js
  };

  return (
    <div className="prof-container">
      <aside className="sidebar">
        <img src="logo.png" alt="Logo MyDIL" className="logo" />
        <ul>
          {tools.map((tool) => (
            <li key={tool.name}>{tool.name}</li>
          ))}
        </ul>
      </aside>

      <div className="main-content">
        {/* Ajout de la section de recherche et notification */}
        <div className="search-notification">
          <input type="text" placeholder="Rechercher..." className="search-bar" />
          <div className="notification-bell" onClick={handleBellClick}> {/* Ajout de l'événement onClick */}
            <span className="notification-count">1</span>
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
          </div>
          <div className="profile-icon">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon-img" />
          </div>
        </div>

        {/* Section du formulaire */}
        <div className="form-container">
          <h2>Ajouter un Outil</h2>
          <form className="tool-form">
            <label>
              Nom Outil:
              <input type="text" name="nom" />
            </label>
            <label>
              Version:
              <input type="text" name="version" />
            </label>
            <label>
              Mode:
              <input type="text" name="mode" />
            </label>
            <label>
              Statut:
              <input type="text" name="statut" />
            </label>
            <label>
              Description:
              <textarea name="description"></textarea>
            </label>
            <div className="form-buttons">
              <button type="button" className="btn-red" onClick={() => handleRemoveTool(tools[0])}>✖</button>
              <button type="button" className="btn-green" onClick={handleAddTool}>✔</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prof;
