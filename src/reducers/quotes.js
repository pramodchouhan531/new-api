import {GET_QUOTES} from "../actions/actiontype"


const initialstate={
    quotes:[]
}

const  quotesreducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.quotes,
        loading: false
      }
    default: return state;
    }
};
export default  quotesreducer;
