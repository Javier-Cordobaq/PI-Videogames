import { GET_ALL_GAMES, GET_DB, GET_GAMES_BY_NAME, GET_GAMES_BY_ID, CREATE_GAME } from '../actions/index'
const inicialState = { videogames: [] };

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
        return {
            ...state, 
            videogames: action.payload
        }
        case GET_DB:
        return {
            ...state,
            videogames: action.payload
        }
        case GET_GAMES_BY_NAME:
        return {
            ...state,
            videogames: action.payload
        }
        default:
        return state

    }
}

export default rootReducer;