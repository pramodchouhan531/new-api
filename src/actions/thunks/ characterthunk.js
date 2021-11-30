import axios from 'axios';
import { getcharacter} from '../action';


const client = axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
  });

client.defaults.headers.common['Authorization'] = ' Bearer 7IYz5itR8qSsKznurjvt';

export const requestcharacter =() => async (dispatch) =>{
    try{
      const response = await client.get('/character?name=/foot/i');
      dispatch(getcharacter(response.data.docs));
    }
    catch (err) {
    console.log("request error",err);
  }
}