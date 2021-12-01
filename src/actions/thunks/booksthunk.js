import axios from 'axios';
import { getbooks } from '../action';


export const requestbooks =() => async (dispatch) =>{
  const response = await axios.get('https://the-one-api.dev/v2/book?limit=2');
  dispatch(getbooks(response.data.docs));
}
