import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
  <div className='cont-landing'>
      <Link to='/home' style={{ textDecoration: 'none' }}>
      <h1 className='btn-landing'>VideogamesCo</h1>
      <h2 className='btn-explore'>Explore</h2>
      </Link>
  </div>
  );
};

export default LandingPage;
