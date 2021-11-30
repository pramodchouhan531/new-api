import {GET_CHARACTER} from "../actions/actiontype"


const initialstate={
    character:[]
}

const  characterreducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_CHARACTER:
            return {
                ...state,
                character: action.character,
                loading: false
            }
        default: return state;
    }
};
export default  characterreducer;

