import React from 'react';
import '../styles/CrearJuego.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getGenre, CreateGame } from '../redux/actions'
import { Link, useHistory } from 'react-router-dom';

const CrearJuego = () => {

  const [state, setState] = useState({
    name: '',
    description: '', 
    released: '', 
    rating: '', 
    image: '', 
    platforms: [],
    genre: []
  });

  const dispatch = useDispatch();
  const genres = useSelector(state => state.genre)
  const history = useHistory()

  useEffect(() =>  {
    dispatch(getGenre())
    console.log(genres)
  }, [])


  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value 
    })
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(CreateGame(state));
    history.push('/home')
    alert("The game was created")
  }

  const handleGenres = (e) => {
    setState({
      ...state,
      genre: state.genre.includes(e.target.value) ? state.genre.filter(el => el !== e.target.value) : state.genre.concat(e.target.value)
  })
  }

  const handlePlatforms = (e) => {
    setState({
      ...state,
      platforms: state.platforms.includes(e.target.value) ? state.platforms.filter(el => el !== e.target.value) : state.platforms.concat(e.target.value)
  })
  }

  return (
  <form className='cont-form' onSubmit={handleSumbit}>
    <h1>Crea tu propio juego</h1>

    <label>Nombre</label>
    <input
    className='input-form'
    type='text'
    placeholder='Nombre'
    value={state.name}
    name='name'
    onChange={handleChange}
    /> 

  <div>
    <label>Description: </label>
      <div>
        <textarea type="text"  
        placeholder='Descripcion' 
        name="description" cols="40" 
        rows="6" onChange={handleChange} 
        />
      </div>
  </div>

  <div>
  <label>Released</label> 
  <input
    type='text'
    placeholder='2003-05-11'
    value={state.released}
    name='released'
    onChange={handleChange}
    /> 
  </div>

  <div>
  <label>Rating</label> 
  <input
    type='text'
    placeholder='rating'
    value={state.rating}
    name='rating'
    onChange={handleChange}
    /> 
  </div>

  <div>
    <label>Image url: </label>
    <input type="text" name="image" onChange={handleChange} />
  </div>

  <div>
  <label>Genre</label>
    {genres.map((c, index) => (
      <div key={index}>
       <input 
       type='checkbox' id={c.id}
       value={c.name}
       onChange={handleGenres}
       />
       <label htmlFor={c.id}>{c.name}</label>
      </div>
    ))}
    </div> 

      <div>
      <div> 
            <label>Platforms: </label>
            <div><input value="PlayStation 4" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>PS4</label></div>
            <div><input value="PlayStation 5" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>PS5</label></div>
            <div><input value="PC" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>PC</label></div>
            <div><input value="SEGA" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>SEGA</label></div>
            <div><input value="NINTENDO 64" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>NINTENDO 64</label></div>
            <div><input value="Nintendo Switch" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>NINTENDO SWITCH</label></div>
            <div><input value="ATARI" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>ATARI</label></div>
            <div><input value="Xbox One" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>XBOX ONE</label></div>
            <div><input value="Xbox 360" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>XBOX X</label></div>
            <div><input value="GAME BOY ADVANCED" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>GAME BOY ADVANCED</label></div>
            <div><input value="IOS" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>IOS</label></div>
            <div><input value="Linux" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>LINUX</label></div>
            <div><input value="Android" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>ANDROID</label></div>
            <div><input value="WEB" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>WEB</label></div>
            <div><input value="PlayStation" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>PLAYSTATION</label></div>
        </div>
    </div> 

    <input type='submit' value='Crear juego'/>
    
    <Link to='/home'>
    <button>Volver</button>
    </Link>

  </form>
  );
};

export default CrearJuego;
