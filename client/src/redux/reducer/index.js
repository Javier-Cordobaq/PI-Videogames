import { GET_ALL_GAMES, GET_DB, GET_GAMES_BY_NAME, GET_GAMES_BY_ID, RESET, GET_GENRE, GET_API, FILTER_BY_GENRE, FILTER_ALPH, FILTER_BY_RATING, DESTROY } from '../actions/index'
const inicialState = { videogames: [], videogamesId: {}, genre: [], allVideogames: []};

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
        return {
            ...state, 
            videogames: action.payload,
            allVideogames: action.payload
        }
        case GET_DB:
        return {
            ...state,
            videogames: action.payload,
            allVideogames: action.payload
        }
        case GET_GAMES_BY_NAME:
        return {
            ...state,
            videogames: action.payload
        }
        case GET_GAMES_BY_ID:
        return {
            ...state,
            videogamesId: action.payload
        }
        case RESET:
        return {
            ...state,
            videogamesId: {}
        }
        case GET_GENRE:
        return {
            ...state,
            genre: action.payload
        }
        case GET_API:
        return {
            ...state,
            videogames: action.payload,
            allVideogames: action.payload
        }
        case DESTROY:
          return {
              ...state,
              videogames: action.payload,
              allVideogames: action.payload
          }

        // Filtros

        case FILTER_BY_GENRE:
            const alljuegos = state.allVideogames
            const generos = alljuegos.filter(c => c.genres?.find(c => c === action.payload) || c.Genres?.find(c=> c.name === action.payload))
            const statusFiltered = action.payload === "todos" ? alljuegos : generos
            return {
                ...state,
                videogames:statusFiltered
            }

        case FILTER_ALPH:
                const todos = state.videogames;
                const NoRepeat = todos.slice().sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                      return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                      return -1;
                    }
                    return 0;
                  })
                let sortedGames =
                  action.payload === "a-z"
                    ? NoRepeat
                    : NoRepeat.reverse()
                return {
                    ...state,
                    videogames: action.payload === '' ? state.allVideogames : sortedGames,
                };

            case FILTER_BY_RATING:
                const rat = state.videogames;
                const Ordena = rat.slice().sort(function (a, b) {
                    if (Number(a.rating) > Number(b.rating)) {
                      return 1;
                    }
                    if (Number(b.rating) > Number(a.rating)) {
                      return -1;
                    }
                    return 0;
                  })
                let sortedRating =
                  action.payload === "menor-mayor"
                    ? Ordena
                    : Ordena.reverse()
                return {
                    ...state,
                    videogames: action.payload === '' ? state.allVideogames : sortedRating,
                };


        default:
        return state

    }
}

export default rootReducer;