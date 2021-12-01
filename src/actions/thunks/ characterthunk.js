import axios from 'axios';
import { getcharacter, getcharacterfilter} from '../action';

const client = axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
  });

client.defaults.headers.common['Authorization'] = ' Bearer 7IYz5itR8qSsKznurjvt';

export const requestcharacter =(prevFilters) => async (dispatch) =>{
  try{
    const params = {
      limit: prevFilters.limit
    };
    const { data: { docs, ...filter } }  = await client.get('/character/',{ params });
       dispatch(getcharacter({character:docs}));
       dispatch(getcharacterfilter(filter));
    }
  catch (err) {
    console.log("request error",err);
  }
}