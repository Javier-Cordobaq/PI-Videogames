import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
  <div className='cont-landing'>
      <Link to='/home' style={{ textDecoration: 'none' }}>
      <button className='btn-landing'>Home</button>
      </Link>
  </div>
  );
};

export default LandingPage;
