import React , {useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import {filterGamesByGenre, getGenre} from "../../redux/actions"

const Genres = () => {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genre)

    useEffect (() => {
            dispatch(getGenre())
    }, [])

    const handleGenres = (e) => {
        dispatch(filterGamesByGenre(e.target.value))
    }
    console.log(genres)
    return (
        <div>
       
 <select onChange={(e) => handleGenres(e)}>
              <option value="">Filter By Genre</option>
              <option>todos</option>
              {
                  genres && genres.map(g => (
                      <option value={g.name} key={g.id}>{g.name}</option>
                  ))
              }
          </select>
          </div>
)
}

export default Genres;

/* import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { filterGamesByGenre, getGenre } from '../../redux/actions';

function Genres() {
    
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genre);
    
    function handleGenre(event) {
        dispatch(filterByGenre(event.target.value))
    }

    useEffect(() => {
        dispatch(getGenre());
    }, [dispatch])

    return (
        <div style={{height: '100px'}}>
            
        <select onChange={(event) => handleGenre(event)}>
          <option value='' disabled>Filter by genre</option>
          <option value='todos'>All</option>
          {genres &&
            genres.map((g) => {
              return (
                <option key={g.id}>
                  {g.name}
                </option>
              );
            })}
      </select>
        </div>
    )
}

export default Genres */