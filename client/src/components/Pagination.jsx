import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pagination.css'

const Pagination = ({ gamesPerPage, videojuegos, paginate, currentpage }) => {

const pageNumbers = []

for (let i = 1; i <= Math.ceil(videojuegos / gamesPerPage); i++){
    pageNumbers.push(i);
}

  return (
  <div className='cont-pagination'>
      {pageNumbers.map(number => (
          <li className={(currentpage === number)?'active': null} key={number}>
              <Link onClick={() => paginate(number)} to='/home' style={{ textDecoration: 'none' }}>
                <p>{number}</p>
              </Link>
          </li>
  ))}
  </div>
  );
};

export default Pagination;
