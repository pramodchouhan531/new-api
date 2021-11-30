import axios from 'axios';
import { getquotes } from '../action';
const client = axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
  });

client.defaults.headers.common['Authorization'] = ' Bearer 7IYz5itR8qSsKznurjvt';

export const requestquotes =(id) => async (dispatch) =>{
    try{
      const response = await client.get(`/movie/${id}/qoute`);
      console.log(response.data.docs)
      dispatch(getquotes(response.data.docs));
    }
    catch (err) {
    console.log("request error",err);
  }
}
