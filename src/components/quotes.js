import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { useEffect } from 'react';
import { requestquotes } from '../actions/thunks/ quotesthunk';
import { useParams } from 'react-router';

const Quotes=()=>{
  const quotes = useSelector(state=>state.quotesreducer.quotes)
  const dispatch = useDispatch();
  const {id}=useParams();
  useEffect(() => {
      dispatch(requestquotes(id))
  },[])
  return (
        <div>
           <li>{quotes.map(el=>(
            <>
              <p>{el.dialog}</p>
              <p>{el.movie}</p>
            </>
          ))}</li> 
            
        </div>
    );

}
export default Quotes;
