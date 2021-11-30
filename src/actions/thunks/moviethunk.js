import axios from 'axios';
import { getmoves} from '../action';


const client = axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
  });

client.defaults.headers.common['Authorization'] = ' Bearer 7IYz5itR8qSsKznurjvt';

export const requestmovie =() => async (dispatch) =>{
    try{
      const response = await client.get('/movie?sort=character:desc');
      dispatch(getmoves(response.data.docs));
    }
    catch (err) {
    console.log("request error",err);
  }
}
