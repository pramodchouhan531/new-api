import axios from 'axios';
import { getmoves, getmoviefilter} from '../action';


const client = axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
  });

client.defaults.headers.common['Authorization'] = ' Bearer 7IYz5itR8qSsKznurjvt';

export const requestmovie =(prevFilters) => async (dispatch) =>{
    try{
      const params = {
        limit: prevFilters.limit
      };
      const { data: { docs } }  = await client.get(`/movie/?budgetInMillions<${params.limit}`);
      dispatch(getmoves({movie:docs}));
      //dispatch(getmoviefilter(filter))
    }
    catch (err) {
    console.log("request error",err);
  }
}
