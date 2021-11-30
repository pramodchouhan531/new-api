import { combineReducers } from "redux";
import booksreducer from "./books";
import moviereducer from "./movie"
import  characterreducer from "./character"
import quotesreducer from "./quotes";
const rootReducer = combineReducers({
  booksreducer,
  moviereducer,
  characterreducer,
  quotesreducer
})
export default rootReducer;