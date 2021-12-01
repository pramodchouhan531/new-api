import {GET_CHARACTER,SET_CHARACTER_FILTER} from "../actions/actiontype"


const initialstate={
   records:{ 
    character:[],
    filter:{limit:10}
}
}

const  characterreducer = (state = initialstate, action) => {
    switch (action.type) {
      case GET_CHARACTER:
        return { 
           ...state,
           records: {
             ...state.records,
             ...action.character,
             loading: false
            }
        }
      case SET_CHARACTER_FILTER:  
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
export default  characterreducer;

