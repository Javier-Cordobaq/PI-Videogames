import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
  return (
  <div className='cont-home'>
      <h1>Bienvenido a CoJuegos</h1>
      <Link to='/mor:id' style={{ textDecoration: 'none' }}>
      <div className='Game'>
          <h1>GTA 5</h1>
      </div>
      </Link>
  </div>
  );
};

export default Home;
