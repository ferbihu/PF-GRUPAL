const initialState = {
   safeplce:[],
   user: [],
   isLogged:false,
   userId:null,
   stateSitie:[{
    "id": "1",
	  "name": "Primer Safe",
    "lastname":"Bar",
	  "country": "Argentina",
	  "town": "CABA",
    "street": "Belgrano",
  	"number": "992",
    "postcode":"AA1878",
  	"lat": -34.61241375774842,
    "lng":-58.38022418084046,
    "email":"galicia@gmail.com",
    "telefhone":+5401123244556,
    "userid":2}],
  };
function reducers(state = initialState, action) {
    switch (action.type) {
       case "RENDER_USER_NAME":
          return {
            ...state,
           user: action.payload
            }
      case "POST_SAFEPLACE":
        return {
          ...state,
        };
        case "ByCountrys":
          const allSafeplace = state.safeplace;
          const countrysFilter = action.payload === 'All' ? allSafeplace :
          allSafeplace.filter(i => i.status === action.payload)
          return {
              ...state,
              safeplce: countrysFilter
          }
        case "LOG_OUT_GOOGLE":
          return {
            ...state,
            user: state.user = []
          }
          case "LOGIN":
          return {
            ...state,
            isLogged: true,
            userId:action.payload.userId
          }
         
          case "ALL_SITIES":
            return {
                ...state,
                stateSitie: action.payload.info,
                };
        default:
      return state;
  }
}

export default reducers;