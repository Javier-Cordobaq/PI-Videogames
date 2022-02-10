import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getGamesByName } from '../redux/actions'
import '../styles/SearchBar.css'

const SearchBar = () => {

  let dispatch = useDispatch();
  const [ state, setState ] = useState('');

  const onSumbit = (e) =>  {
    e.preventDefault(); 
    dispatch(getGamesByName(state))
   }

  const onChange = (e) => {
    setState(
      e.target.value
    )
  } 

  return (
  <div>
    <form onSubmit={onSumbit} className='buscador'>
      <input className = 'searchbar'
        type="text"
        placeholder ="Busca un juego..."
        onChange={onChange}
      />
        <input className='agregar' 
        type="submit" 
        value="game"/>
    </form>
  </div>)
  ;
};

export default SearchBar;
