import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { requestcharacter } from '../actions/thunks/ characterthunk';
import { useEffect } from 'react';

const  Character=()=>{
  const  character = useSelector(state=>state.characterreducer.character)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(requestcharacter())
  },[])
  return (
        <div>
          <li>{character.map(el=>(
              <>
              <tr>
                   <td>{el.race}</td>    
              </tr>
                 
              </>
          ))}</li>
        </div>
    );

}
export default Character;
