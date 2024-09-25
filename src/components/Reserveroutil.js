import React, { useState } from 'react';
import './Reserveroutil.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Reserveroutil = () => {
    const [projectDescription, setProjectDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleReservation = () => {
        alert(`Réservation effectuée pour le projet : ${projectDescription} à la date du ${selectedDate}`);
    };

    return (
        <div className="reservation-container">
            <div className="mydil-logo">
                <img src="logo.png" alt="Mydil Logo" />
            </div>
            
            <div className="search-notification">
                <input type="text" placeholder="Rechercher..." className="search-bar" />
                <div className="notification-bell">
                    <span className="notification-count">1</span>
                    <FontAwesomeIcon icon={faBell} className="bell-icon" />
                </div>
                <div className="profile-icon">
                    <FontAwesomeIcon icon={faUserCircle} className="profile-icon-img" />
                </div>
            </div>

            <div className="description-section">
                <textarea 
                    placeholder="Description du projet qui va être réalisé avec cet appareil" 
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                />
                <button className="reserve-button" onClick={handleReservation}>
                    Réserver
                </button>
            </div>

            <div className="calendar-section">
                <input 
                    type="month" 
                    value={selectedDate} 
                    onChange={handleDateChange}
                />
            </div>
        </div>
    );
};

export default Reserveroutil;
