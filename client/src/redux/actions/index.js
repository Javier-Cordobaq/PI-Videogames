import axios from 'axios'

const GET_ALL_GAMES = 'GET_ALL_GAMES'
const GET_DB = 'GET_DB'
const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME'
const GET_GAMES_BY_ID = 'GET_GAMES_BY_ID'
const CREATE_GAME = 'CREATE_GAME'
const GET_GENRE = 'GET_GENRE'

const getAll = () => async dispatch => {

    return await axios.get('http://localhost:3001/')
    .then((response) => {
        dispatch({
          type: GET_ALL_GAMES,
          payload: response.data,
        });
      });  

}

const getDb = () => async dispatch => {

    return await axios.get('http://localhost:3001/database')
    .then((response) => {
        dispatch({
          type: GET_DB,
          payload: response.data,
        });
      });  

}

const getGamesByName = () => async dispatch => {

    return await axios.get('http://localhost:3001/videogames')
    .then((response) => {
        dispatch({
          type: GET_GAMES_BY_NAME,
          payload: response.data,
        });
      });  

}

const getGamesById = (id) => async dispatch => {

    return await axios.get(`http://localhost:3001/videogame/${id}`)
    .then((response) => {
        dispatch({
          type: GET_GAMES_BY_ID,
          payload: response.data,
        });
      });  

}

const CreateGame = () => async dispatch => {

    return await axios.get(`http://localhost:3001/create`)
    .then((response) => {
        dispatch({
          type: CREATE_GAME,
          payload: response.data,
        });
      });  

}

const getGenre = () => async dispatch => {

    return await axios.get(`http://localhost:3001/genre`)
    .then((response) => {
        dispatch({
          type: GET_GENRE,
          payload: response.data,
        });
      });  

}




