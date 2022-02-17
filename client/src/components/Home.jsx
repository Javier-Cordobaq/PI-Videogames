import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAll, FilterByOrder, FilterByRating  } from '../redux/actions';
import Nav from './Nav';
import Pagination from './Pagination'
import CardvideoGame from './CardVideoGame'
import Spinner from './Spinner';
import '../styles/Home.css'

const Home = () => {

  let dispatch = useDispatch();  
  const videojuegos = useSelector(state => state.videogames);
  /* const [ loading, setLoading] = useState(false); */

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
   /*  setLoading(true) */
  }, []);
  
  console.log(videojuegos)

  // Filtros ordenar alfabeeticamente y por rating

  const [, setOrder] = useState("");
  function handleFilter(event) {
   dispatch(FilterByOrder(event.target.value))
   setCurrentPage(1)
   setOrder("Order" + event.target.value);
}

function handleRating(event) {
 dispatch(FilterByRating(event.target.value))
 setCurrentPage(1)
 setOrder("Order" + event.target.value);
}



  return (

    <div className='global-contHome'>
      <Nav handleFilter={handleFilter} handleRating={handleRating}/>
      <Pagination gamesPerPage={gamesperpage} videojuegos={videojuegos.length} currentpage={currentpage} paginate={paginate}/>
      {
        currentGames.length > 0 ? 
       
        (
          <div className='cont-home'>
            {
              currentGames?.map((c, index) => <CardvideoGame
              name={c.name}
              img={c.image}
              genres={c.genres}
              Genres={c.Genres}
              key={index}
              id={c.id}
              rating={c.rating}
              />)
            }
          </div>
        )
        : 
        (
          <div className='spinner-home'>
          <Spinner/>
        </div>
          )
      }
     <Pagination gamesPerPage={gamesperpage} videojuegos={videojuegos.length} currentpage={currentpage} paginate={paginate}/>
    </div>
    );
};

export default Home;