import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { requestcharacter } from '../actions/thunks/ characterthunk';
import { useEffect } from 'react';
import { getcharacterfilter } from '../actions/action';

const  Character=()=>{
  const  {character} = useSelector(state=>state.characterreducer.records)
  const {filter} = useSelector(state=>state.characterreducer.records)
  const dispatch = useDispatch();
  const handleChangeFilter = (event) => {
    const { value, name } = event.target;
    dispatch(getcharacterfilter({ [name]: value }));
  };

  useEffect(() => {
    const getRecords = () => {
      dispatch(requestcharacter(filter));
    };
    getRecords();
  },[filter.limit])
 
  return (
        <div>
          <li>{character.map(el=>(
              <>
                <tr>
                   <td>{el.race}</td>    
                </tr>
              </>
          ))}</li>
         <select name="limit" value={filter.limit} onChange={handleChangeFilter}>
           <option value={5}>5</option>
           <option value={10}>10</option>
           <option value={15}>15</option>
           <option value={20}>20</option>
           <option value={30}>30</option>
         </select>

        </div>
      );
}
export default Character;
