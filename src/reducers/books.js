import {GET_BOOKS} from "../actions/actiontype"


const initialstate={
    books:[]
}

const booksreducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.books,
                loading: false
            }
        default: return state;
    }
};
export default booksreducer;

