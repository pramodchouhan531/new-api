import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { useEffect } from 'react';
import { requestmovie } from '../actions/thunks/moviethunk';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movie=()=>{
  const movie = useSelector(state=>state.moviereducer.movie)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(requestmovie())
  },[])
  return (
        <div>
           <li>{movie.map(el=>(
            <>
              <p>{el._id}</p>
              <p>{el.name}</p>
              <Link to={`/movie/${el._id}/quotes`}><Button  variant="primary">quotes</Button></Link>
            </>
          ))}</li> 
            
        </div>
    );

}
export default Movie;
