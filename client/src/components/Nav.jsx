import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import '../styles/Nav.css'

const Nav = () => {
  return (
  <div className='Nav'>
      <Link to='/home' style={{ textDecoration: 'none' }}>
      <p>Home</p>
      </Link>

      <Link to='/CrearJuego' style={{ textDecoration: 'none' }}>
      <p>Crear Juego</p>
      </Link>

      <SearchBar/>

  </div>
  );
};

export default Nav;
