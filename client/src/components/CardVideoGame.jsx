import React from 'react';
import '../styles/CardVideoGame.css'

const CardVideoGame = ({name, genres, img}) => {
  return (
  <div className='contCard'>
    
      <h1>{name}</h1>
      <p>{genres.join(" ")}</p>
      <img src={img}/>
      
  </div>
  );
};

export default CardVideoGame;
