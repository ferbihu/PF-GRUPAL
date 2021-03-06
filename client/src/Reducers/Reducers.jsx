const initialState = {
  stateCommentNotice: [],
  statecoord: [],
  safeplce: [],
  user: [],
  role: [],
  userId: null,
  filtered_safePlaces: [],
  stateSitie: [{
    "id": "1",
    "name": "Primer Safe",
    "country": "Argentina",
    "town": "CABA",
    "street": "Belgrano",
    "number": "992",
    "postcode": "AA1878",
    "lat": -34.61241375774842,
    "lng": -58.38022418084046,
    "email": "galicia@gmail.com",
    "telefhone": +5401123244556,
    "keyword": "LATON",
    "relation": "dueño",
    "status": "accepted",
    "description_status": "Prueba",
    "userid": 2
  }],
  allSafePlacesPanel: [],
  userData: [],
  popup: false,
  popup_warning: false,
  users: [],
  comments_safeP: [],

  userDataById: [],

  sidebar: [],
  news:[],
  statenewsid:[],
  logeado: localStorage.getItem("isLogged"),
  token: "",
  healtNews:[],
  allHealtNews:[],
  filterEspecialidad:[],
  logginError : false
};


function reducers(state = initialState, action) {
  switch (action.type) {
    case "GET_SAFEPLACE":
      let lugares_filtrados = action.payload.info.filter(e => e.status === "warning" || e.status === "accepted")
      return {
        ...state,
        stateSitie: lugares_filtrados

      }


    case "RENDER_USER_NAME":
      return {
        ...state,
        user: action.payload
      }
    case "POST_SAFEPLACE":
      return {
        ...state,
      };
    case "BY_COUNTRYS":
      return {
        ...state,
        safeplce: action.payload
      }
    case "BY_TOWN":
      return {
        ...state,
        safeplce: action.payload
      }
    case "LOG_OUT_GOOGLE":
      return {
        ...state,
        user: state.user = []
      }
    case "LOGIN":
      
      return {
        ...state,

        userId: action.payload.userId,

        userData: action.dataUser,

        role: action.payload2,
      
        logeado:localStorage.setItem("isLogged", true),

      }

    case "ALL_SITIES":
      return {
        ...state,
        filtered_safePlaces: action.payload.info, //recipes
        stateSitie: action.payload.info,          //allRecipes

      };
    case "FILTER_BY_STATUS":
      let lugares = state.allSafePlacesPanel
      let statusFiltered = lugares.filter(e => e.status.includes(action.payload))
      return {
        ...state,
        filtered_safePlaces: statusFiltered
      };

    case "DELETE_SAFEPLACE":
      return {
        ...state,
        isLogged: true,
        userId: action.payload.userId,
        stateSitie: state.stateSitie.filter(sitie => sitie.id !== action.payload)
      }
    case "COORDENADAS":
      return {
        ...state,
        statecoord: action.payload


      }
    case "GET_SAFEPLACE_PANEL":
      return {
        ...state,
        filtered_safePlaces: action.payload, //recipes
        allSafePlacesPanel: action.payload  //allrecipes

      }
    case "ACCEPTED_STATUS":
      return {
        ...state,
      };
    case 'FILTER_SAFEPLACE_BY_ID':
      const allSafePlace = state.allSafePlacesPanel
      const id = state.userId
      const filterSafePlace = allSafePlace.filter(i => i.status.includes(id))
      return {
        ...state,
        isLogged: true,
        allSafePlacesPanel: filterSafePlace
      }

    case "UPDATE_DATA_USER":
      return {
        ...state,
      };
    case "USER_DATA":
      return {
        ...state,
        userDataById: action.payload
      };

    case "UPDATE_SIDEBAR_STATE":
      const sidebar_state = state.sidebar === false ? true : false
      return {
        ...state,
        sidebar: sidebar_state
      }
    case "UPDATE_POPUP_STATE":
      const popup_state = state.popup === false ? true : false
      return {
        ...state,
        popup: popup_state
      }
    case "UPDATE_POPUP_STATE_WARNING":
      const popup_state_warning = state.popup_warning === false ? true : false
      return {
        ...state,
        popup_warning: popup_state_warning
      }
    case "CLOSE_POPUP":
      return {
        ...state,
        popup_warning: false,
        popup: false 
      }

    // eslint-disable-next-line
    case "UPDATE_DATA_USER":
      return {
        ...state,
      }
    // eslint-disable-next-line
    case "GET_USERS":
      return {
        ...state,
        users: action.payload
      }

    case "USERS_NAME":
      return {
        ...state,
        users: action.payload
      }
    case "GET_COMMENTS_SP":
      return {
        ...state,
        comments_safeP: action.payload
      }
    case "GET_COMMENT_NOTICE":
      return {
        ...state,
        stateCommentNotice: action.payload.info,

      }
    case "POST_COMMENT_NOTICE":
        return {
          ...state,
        }
        case "GET_NEWS":
          return {
            ...state,
            news: action.payload.info,
          }
          case "GET_NEWS_BY_ID":
          return {
            ...state,
            statenewsid: action.payload.info,
          }
    case "IS_LOGGED":
      return {
        ...state,
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
        logeado: localStorage.getItem('isLogged')
      }
      case "LOGGIN_ERROR":
        return {
          ...state,
          logginError: action.payload.error
        }

    case "GET_HEALTH":
              return {
                ...state,
                healtNews: action.payload,
                allHealtNews:action.payload
              }

    case "HEALT_BY_NAME":
                return {
                  ...state,
                  healtNews: action.payload
                }

    case 'POST_HEALTH':
      return {
        ...state,
      }            
   case 'BY_ESPECIALIDAD':
        return {
          ...state,
          filterEspecialidad: state.allHealtNews.filter(e => e.profession === action.payload)
      } 

    default:
      return state;
  }

}

export default reducers;