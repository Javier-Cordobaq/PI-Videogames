import React from 'react';
import '../styles/CardVideoGame.css'
import { Link } from 'react-router-dom';

const CardVideoGame = ({name, genres, img, id, Genres}) => {
  return (
  <Link to={`/mor/${id}`}>
  <div className='contCard'>
      <div>
          <h1>{name}</h1>
          <h2>Genres</h2>
      <div className='cont-genres'>
      {
      Genres ? (Genres?.map(c => (<p>{c.name}</p>))) : (genres?.map(c => (<p>{c}</p>)))
      } 
      </div>  
      </div>
      <div className='cont-img'>
        <img src={img}/>
      </div> 
  </div>
  </Link>
  );
};

export default CardVideoGame;
