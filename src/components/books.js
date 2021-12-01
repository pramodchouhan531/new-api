import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { requestbooks } from '../actions/thunks/booksthunk';
import { useEffect } from 'react';


const Books=()=>{
  const books = useSelector(state=>state.booksreducer.books)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(requestbooks())
  },[])
  return (
    <div>
      <li>{books.map(el=>(
       <>
         <tr>
           <td>{el._id}</td>
           <td>{el.name}</td>
         </tr>
                 
        </>
      ))}</li>
    </div>
);

}
export default Books;
