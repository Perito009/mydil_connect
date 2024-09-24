import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Prof from './components/Prof';
import Student from './components/Student';
import Reservation from './components/Reservation';
import './App.css';  // Importer ton fichier CSS

const App = () => {
  return (
    <div className="App"> {/* Appliquer la classe App ici pour maintenir le style */}
      <header className="App-header"> {/* Appliquer la classe App-header pour maintenir le style du header */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prof" element={<Prof />} />
            <Route path="/student" element={<Student />} />
            <Route path="/Reservation" element={<Reservation />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
};

export default App;
