import axios from 'axios'

export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_DB = 'GET_DB'
export const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME'
export const GET_GAMES_BY_ID = 'GET_GAMES_BY_ID'
export const CREATE_GAME = 'CREATE_GAME'
export const GET_GENRE = 'GET_GENRE'

export const getAll = () => async dispatch => {
  let json = await axios.get('http://localhost:3001/');
      dispatch({
        type: GET_ALL_GAMES,
        payload: json.data,
      });
    
};

export const getDb = () => async dispatch => {

    return await axios.get('http://localhost:3001/database')
    .then((response) => {
        dispatch({
          type: GET_DB,
          payload: response.data,
        });
      });  

}

export const getGamesByName = (name) => async dispatch => {

    return await axios.get(`http://localhost:3001/videogames?name=${name}`)
    .then((response) => {
        dispatch({
          type: GET_GAMES_BY_NAME,
          payload: response.data,
        });
      });  

}

export const getGamesById = (id) => async dispatch => {

    return await axios.get(`http://localhost:3001/videogame/${id}`)
    .then((response) => {
        dispatch({
          type: GET_GAMES_BY_ID,
          payload: response.data,
        });
      });  

}

export const CreateGame = () => async dispatch => {

    return await axios.get(`http://localhost:3001/create`)
    .then((response) => {
        dispatch({
          type: CREATE_GAME,
          payload: response.data,
        });
      });  

}

export const getGenre = () => async dispatch => {

    return await axios.get(`http://localhost:3001/genre`)
    .then((response) => {
        dispatch({
          type: GET_GENRE,
          payload: response.data,
        });
      });  

}




