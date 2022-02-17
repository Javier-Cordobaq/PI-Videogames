import axios from 'axios'

export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_DB = 'GET_DB'
export const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME'
export const GET_GAMES_BY_ID = 'GET_GAMES_BY_ID'
export const CREATE_GAME = 'CREATE_GAME'
export const GET_GENRE = 'GET_GENRE'
export const RESET = 'RESET'
export const DB_OR_API = "DB_OR_API";
export const GET_API = 'GET_API'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE' 
export const FILTER_ALPH = "FILTER_ALPH";
export const FILTER_BY_RATING = 'FILTER_BY_RATING'
export const DESTROY = 'DESTROY'

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

export const destroy = (id) => async dispatch => {

  return await axios.get(`http://localhost:3001/destroy/${id}`)
  .then((response) => {
      dispatch({
        type: DESTROY,
        payload: response.data
      });
    });  

}

export const getApi = () => async dispatch => {

  return await axios.get('http://localhost:3001/Api')
  .then((response) => {
      dispatch({
        type: GET_API,
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

export const CreateGame = (create) => async () => {

    return await axios.post(`http://localhost:3001/create`, create)

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

export const reset = () => dispatch => {
  return dispatch({
    type: RESET
  })
}

// Filtros

export const filterGamesByGenre = (payload) => {
  return {
    type: FILTER_BY_GENRE,
    payload
  }
}

export function FilterByOrder(payload) {
  return async function (dispatch) {
      try {
          dispatch ({
              type: FILTER_ALPH,
              payload,
          });
      }
      catch (error) {
          console.log(error)
      }    
  }
}

export function FilterByRating(payload) {
  return async function (dispatch) {
      try {
          dispatch ({
              type: FILTER_BY_RATING,
              payload,
          });
      }
      catch (error) {
          console.log(error)
      }    
  }
}



