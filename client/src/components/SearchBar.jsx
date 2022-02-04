import React from 'react';
import '../styles/SearchBar.css'

const SearchBar = () => {
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
