import React from 'react';
import '../styles/CrearJuego.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getGenre, CreateGame } from '../redux/actions'
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

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
    Swal.fire({
      icon: 'success',
      title: 'Your game was created successfully',
      showConfirmButton: false,
      timer: 1500
    })
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
  <form className='cont-form' onSubmit={handleSumbit} autocomplete="off">

    <h1>Create game</h1>

    <div className='form'>

        <div className='cont-inputs'>

          <div className='input-form'>
              <input
              type='text'
              value={state.name}
              name='name'
              onChange={handleChange}
              required
              />
                <label className='lbl-nombre'>
                    <span className='text-nomb'>
                      Name
                    </span>
                </label>
          </div>

          <div className='input-form'>
            <input
              type='text'
              value={state.released}
              name='released'
              onChange={handleChange}
              required
              /> 
                <label className='lbl-nombre'>
                    <span className='text-nomb'>
                      Released
                    </span>
                </label>
          </div>

          <div className='input-form'>
            <input
              type='text'
              value={state.rating}
              name='rating'
              onChange={handleChange}
              required
              /> 
               <label className='lbl-nombre'>
                    <span className='text-nomb'>
                      Rating
                    </span>
                </label>
          </div>

          <div className='input-form'>
              <input
              className='input-form'
              type="text" 
              name="image" 
              onChange={handleChange} 
              required
              />
                <label className='lbl-nombre'>
                    <span className='text-nomb'>
                      Image URL
                    </span>
                </label>
          </div>

          <div>
                <textarea 
                className='description'
                type="text"  
                placeholder='Descripcion' 
                name="description" cols="40" 
                rows="6" onChange={handleChange} 
                required
                />
          </div>

      </div>

      <div className='cont-selects'>

          <div className='genre-select'>
            <h2 className='title'>Genres</h2>
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

                <div className='platforms-select'> 
                    <h2 className='title'>Platforms</h2>
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

    </div>

    <input 
    className='btn-create'
    type='submit' 
    value='Crear juego'
    />
    
    <Link to='/home'>
    <button className='btn-volver'>Volver</button>
    </Link>

  </form>
  );
};

export default CrearJuego;
