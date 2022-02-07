import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../redux/actions';
import Nav from './Nav';
import CardvideoGame from './CardVideoGame'
import '../styles/Home.css'


const Home = () => {
  let dispatch = useDispatch();  
  const videojuegos = useSelector(state => state.videogames);
  const [ loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAll());
    setLoading(true)
  }, []);
  
  console.log(videojuegos)

  return (

    <div>
      <Nav/>
      {
        loading ? (
          <div className='cont-home'>
            {
              videojuegos?.map(c => <CardvideoGame
              name={c.name}
              img={c.image}
              genres={c.genres}
              key={c.id}
              />)
            }
          </div>
        )
        : (<div>esta cargando</div>)
      }
    </div>
    );
};

export default Home;