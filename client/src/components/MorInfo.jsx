import React from 'react';
import '../styles/MorInfo.css'
import Spinner from './Spinner';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesById, reset } from '../redux/actions'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MorInfo = () => {

  let dispatch = useDispatch();
  const morinfo = useSelector(state => state.videogamesId)
  const {id} = useParams();
  console.log('Esto no anda')
/*   const {Genres} = morinfo
  console.log(Genres?.map(c => c.name))  */

  useEffect(() => {
    setTimeout(() => {
      dispatch(getGamesById(id))  
    }, 1000);
    return () => {dispatch(reset())}
  }, [id])

  return (
  <div>

  {morinfo.id ? (
  <div className='cont-mor'>
          <div className='title-mor'>
            <h1>{morinfo.name}</h1>
              <div className='title-detail'>
                <p className='cont-title-detail'>Released: &nbsp;{morinfo.released}</p>
                <p className='cont-title-detail'>Rating: &nbsp;{morinfo.rating}</p>
                <div className='genres'>
                  <p>Platforms: &nbsp;</p> 
                    {
                    morinfo.platforms ? (morinfo.platforms?.map(c => <p>{c}&nbsp;</p>)) : <p>No se econtraron plataformas</p>
                    }
                </div>

                <div className='genres'>
                  <p>Genres: &nbsp;</p>
                  {
                    morinfo.Genres ? (morinfo.Genres?.map((c, index) => (<p key={index}>{c.name} &nbsp;</p>))) : (morinfo.genres?.map((c, index) => (<p key={index}> &nbsp; {c} &nbsp;</p>)))
                  }  
                </div>
              </div>            
          </div> 
              <div className='header-img'>

                 <img src={morinfo.image_additional}/> 

                    <div className='cont-info-mor'>
                           <div className='img-continfo'>
                              <img src={morinfo.image} alt="Not Found" />
                            </div> 
                                    <div className='cont-description'>
                                          <h1>Description</h1>
                                          <p>{morinfo.description}</p> 
                                          <a className='website' href={morinfo.website}>Website of {morinfo.name}</a>
                                          <Link to='/home'>
                                          <button>Volver</button>
                                          </Link>
                                    </div>     
                              </div>
                                         
              </div>

          </div>) 
          : 
          (
          <div className='spinner'>
            <Spinner/>
          </div>
            )
          }
  


</div>
 
  );
};

export default MorInfo;

{/*  <p>Genre: {morinfo.Genres?.map(c => c.name)}</p> 
 Tenia un problema y me ayudo el Mauri si quieres te lo llamo y el te explica 
{(morinfo.genres?.map(c => (<p>{c}</p>)))} */}