import { GET_MOVIE } from "../actions/actiontype";

const initialstate={
    movie:[]
}

const moviereducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state,
                movie: action.movie,
                loading: false
            }
        default: return state;
    }
};
export default moviereducer;