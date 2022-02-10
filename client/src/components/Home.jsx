import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../redux/actions';
import Nav from './Nav';
import Pagination from './Pagination'
import CardvideoGame from './CardVideoGame'
import '../styles/Home.css'

const Home = () => {

  let dispatch = useDispatch();  
  const videojuegos = useSelector(state => state.videogames);
  const [ loading, setLoading] = useState(false);

  //Estados paginación

  const [ currentpage, setCurrentPage ] = useState(1);
  const [ gamesperpage ] = useState(15);

  // Pagina de juegos actuales

  const indexOfLastGame = currentpage * gamesperpage;
  const indexOfFirstGame = indexOfLastGame - gamesperpage;
  const currentGames = videojuegos.slice(indexOfFirstGame, indexOfLastGame);

  // Change page

  const paginate = currentpage => setCurrentPage(currentpage);

  useEffect(() => {
    dispatch(getAll());
    setLoading(true)
  }, []);
  
  console.log(videojuegos)

  return (

    <div>
      <Nav/>
      <Pagination gamesPerPage={gamesperpage} videojuegos={videojuegos.length} paginate={paginate}/>
      {
        loading ? (
          <div className='cont-home'>
            {
              currentGames?.map((c, index) => <CardvideoGame
              name={c.name}
              img={c.image}
              genres={c.genres}
              Genres={c.Genres}
              key={index}
              id={c.id}
              />)
            }
          </div>
        )
        : (<div>esta cargando</div>)
      }
      <Pagination gamesPerPage={gamesperpage} videojuegos={videojuegos.length} paginate={paginate}/>
    </div>
    );
};

export default Home;