import React from 'react';
import '../styles/MorInfo.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesById, reset } from '../redux/actions'
import Nav from './Nav';
import { useParams } from 'react-router-dom';

const MorInfo = () => {

  let dispatch = useDispatch();
  const morinfo = useSelector(state => state.videogamesId)
  const {id} = useParams();
  console.log('Esto no anda')
/*   const {Genres} = morinfo
  console.log(Genres?.map(c => c.name))  */

  useEffect(() => {
    dispatch(getGamesById(id))
    return () => {dispatch(reset())}
  }, [id])

  return (
  <div className='cont-mor'>
    <Nav/>
      <h1>Name: {morinfo.name}</h1>
      <p>{morinfo.description}</p>
      <p>{morinfo.released}</p>
      <p>{morinfo.rating}</p>
      <p>Platforms: {morinfo.platforms}</p>
     {/*  <p>Genre: {morinfo.Genres?.map(c => c.name)}</p>  */}
     {/* Tenia un problema y me ayudo el Mauri si quieres te lo llamo y el te explica */}
      {
      morinfo.Genres ? (morinfo.Genres?.map(c => (<p>{c.name}</p>))) : (morinfo.genres?.map(c => (<p>{c}</p>)))
      } 
     {/*  {(morinfo.genres?.map(c => (<p>{c}</p>)))} */}
  </div>
  );
};

export default MorInfo;
