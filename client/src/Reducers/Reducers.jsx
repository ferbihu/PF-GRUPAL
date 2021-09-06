const initialState = {
   safeplce:[],
   user: [],
   stateSitie:[{
    "id": "1",
	  "name": "Primer Safe",
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
          return {
              ...state,
          }
        case "LOG_OUT_GOOGLE":
          return {
            ...state,
            user: state.user = []
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