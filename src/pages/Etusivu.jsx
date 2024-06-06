import React from 'react';
import { Link } from 'react-router-dom';
import spiderImage from "../img/logo.webp";
import '../App.css';

const Etusivu = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: `url('src/img/ruskea.webp')`,
        backgroundSize: 'cover',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2,
      }} />
      <h1 style={{ zIndex: 3, color: 'white' }}>Tervetuloa Korkeasaareen kävijät sivulle !</h1>
      <p style={{ zIndex: 3, color: 'white' }}>Voit seurata montako ihmistä on siellä.</p>
      <a href="/kavijat" style={{ zIndex: 3, color: 'white', backgroundColor: '#638b5f', padding: '10px', textDecoration: 'none', borderRadius: '5px' }}>Lue lisää</a>

      <img src={spiderImage} className="spiderImage" />

    </div>
  );
};

export default Etusivu;