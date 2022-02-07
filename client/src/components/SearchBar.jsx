import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { getGamesByName } from '../redux/actions'
import '../styles/SearchBar.css'

const SearchBar = () => {

  let dispatch = useDispatch();
  const [ isLoading, setLoading ] = useState(false);
  const [ state, setState ] = useState('');

  useEffect(() => {
    dispatch(getGamesByName());
    setLoading(true)
  }, [])

  return (
  <div>
    <form className='buscador'>
      <input className = 'searchbar'
        type="text"
        placeholder ="Busca un juego..."
      />
      <input className='agregar' type="submit" value="New City" />
    </form>
  </div>)
  ;
};

export default SearchBar;
