import React from 'react';
import '../styles/CardVideoGame.css'
import { Link } from 'react-router-dom';
import { destroy } from '../redux/actions';
import { useDispatch } from 'react-redux' 
import Star from '../Media/Star.png'
import Swal from 'sweetalert2'

const CardVideoGame = ({name, genres, img, id, Genres, rating}) => {

  const dispatch = useDispatch();

  const starts = (rating) => {
    const ratings = []
    for(let i = 1; i <= Number(rating); i++) {
      ratings.push(i)
    /* return <img className='img-start' src={Star} width={50} alt="Not Found" /> */
  }
  return ratings.map(c => (<img className='img-start' src={Star} width={50} alt="Not Found" />))
 /*  return ratings */
}

  return (
  <div className='cont-global'>
    <Link to={`/mor/${id}`}>
  <div className='contCard'>
        <div className='cont-text'>
            <div className='name-card'>
              <h1>{name}</h1>
            </div>
            <div>
              {starts(parseInt(rating))}
            </div>
            <h2>Genres</h2>
            <div className='cont-genres'>
                {
                  Genres ? (Genres?.map((c, index) => (<p key={index}>{c.name}</p>))) : (genres?.map((c, index) => (<p key={index}>{c}</p>)))
                } 
            </div>  
        </div>

        

        <div className='cont-img'>
          <img src={img} alt='Not Found'/>
        </div> 

  </div>
        </Link>

        {Genres ? (<button onClick={() => {dispatch(destroy(id)); Swal.fire({
  icon: 'error',
  title: 'Your game was successfully deleted',
  text: `The ${name} game has been removed`,
})}} className='bt-close'>X</button>) : null} 

  </div>
  );
};

export default CardVideoGame;

{/*               <div>
                  <p>{starts(parseInt(rating))} {rating}</p>
              </div> */}