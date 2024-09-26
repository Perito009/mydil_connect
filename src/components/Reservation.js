import React, { useState } from 'react';
import './Reservation.css';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate

const Reservation = () => {
  const items = [
    { name: 'Imprimante 3D', img: '3d-printer.jpg', description: 'Une imprimante 3D pour créer des objets en plastique.' },
    { name: 'Imprimante Laser', img: 'laser-printer.jpg', description: 'Une imprimante laser pour des impressions de haute qualité.' },
    { name: 'Arduino', img: 'arduino.jpg', description: 'Une plateforme de prototypage électronique open-source.' },
    { name: 'Casque VR', img: 'vr-headset.jpg', description: 'Un casque de réalité virtuelle pour une expérience immersive.' },
    { name: 'Robot', img: 'robot.jpg', description: 'Un robot programmable pour diverses tâches.' },
    { name: 'Raspberry', img: 'raspberry.jpg', description: 'Un micro-ordinateur polyvalent pour divers projets.' },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleInfoClick = (item) => {
    setSelectedItem(item);
  };

  
  return (
    <div className="reservation-container">
      <aside className="sidebar">
        <img src="logo.png" alt="Logo MyDIL" className="logo" />
        
      </aside>

      <div className="main-content">
        {/* Ajout de la section de recherche et notification */}
        <div className="search-notification">
          <input type="text" placeholder="Rechercher..." className="search-bar" />
          
        </div>

        {/* Section des articles à réserver */}
        <div className="items-grid">
          {items.map((item) => (
            <div className="item-card" key={item.name}>
              <img src={item.img} alt={item.name} className="item-image" />
              <div className="buttons">
                <button className="btn-info" onClick={() => handleInfoClick(item)}>Infos</button>
                <button className="btn-reserver"onClick={() => navigate('/Reserveroutil')}>Reserver</button> 
              </div>
              {selectedItem && selectedItem.name === item.name && (
                <div className="item-description">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
