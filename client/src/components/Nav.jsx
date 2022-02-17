import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import CreatedOrExist from './Filters/CreatedOrExist';
import Genres from './Filters/Genres';
import '../styles/Nav.css'
import { useState } from 'react';

const Nav = ({handleFilter, handleRating}) => {

  const [filtros, setFiltros] = useState(false)

  return (
  <div className='Nav'>

      <div className='cont-nav'>

        <div className='buscador'>
          <SearchBar/>
        </div>

        <div className='links'>
          
          <Link to='/home' style={{ textDecoration: 'none' }}>
          <p>Home</p>
          </Link>

          <Link to='/CrearJuego' style={{ textDecoration: 'none' }}>
          <p>Create</p>
          </Link>

      <div className='filtros-cont'>        
          <p>Filters</p>
            <label>
                <input 
                className='input-filtros'
                type='checkbox'
                onChange={(c) => {setFiltros(c.target.checked)}}
                />
                <span className='slider'/>
            </label>
      </div>  

        </div>

        
      </div>

      <div className={(filtros === false)?'oculto': 'cont-filtros'}>

        <CreatedOrExist className='filtro'/>
        <Genres className='filtro'/>

        <div>
          <select className='filtro' onChange={(event) => handleFilter(event)}>
            <option value="">Filter alphabetically</option>
            <option value='a-z'>A-Z</option>
            <option value='z-a'>Z-A</option>
          </select>
        </div>

        <div>
          <select className='filtro' onChange={(event) => handleRating(event)}>
            <option value="">Filter by rating</option>
            <option value='menor-mayor'>Menor-Mayor</option>
            <option value='mayor-menor'>Mayor-Menor</option>
          </select>
        </div>

      </div>

  </div>
  );
};

export default Nav;
