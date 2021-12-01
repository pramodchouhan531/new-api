import { GET_MOVIE, SET_MOVIE_FILTER } from "../actions/actiontype";

const initialstate={
    records:{
        movie:[],
        filter:{
          limit:100
       }
}
}
const moviereducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { 
        ...state,
          records: {
            ...state.records,
            ...action.movie,
            loading: false
           }
      }
    case SET_MOVIE_FILTER:
      return {
        ...state,
        records: {
          ...state.records,
          filter: {
            ...state.records.filter,
            ...action.filter,
         }
     }
    }
     default: return state;
 }
};
export default moviereducer;