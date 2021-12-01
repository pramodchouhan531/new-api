import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { requestmovie } from '../actions/thunks/moviethunk';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getmoviefilter } from '../actions/action';
const Movie = () => {
  const { movie } = useSelector(state => state.moviereducer.records)
  const { filter } = useSelector(state => state.moviereducer.records)
  const dispatch = useDispatch();
  const handleChangeFilter = (event) => {
    const { value, name } = event.target;
    dispatch(getmoviefilter({ [name]: value }));
  };
  useEffect(() => {
    const getRecords = () => {
      dispatch(requestmovie(filter));
    };
    getRecords();
  }, [filter.limit])
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>movieID</th>
            <th>name</th>
            <th>budgetInMillions</th>
            <th>runtimeInMinutes</th>
          </tr>
        </thead>
        <tbody>
          {movie.map(el => (
            <tr>
              <td>{el._id}</td>
              <td>{el.name}</td>
              <td>{el.budgetInMillions}</td>
              <td>{el.runtimeInMinutes}</td>
              <td><Link to={`/movie/${el._id}/qoutes`}><Button variant="primary">quotes</Button></Link></td>
            </tr>
          ))}

        </tbody>
      </Table>
      <select name="limit" value={filter.limit} onChange={handleChangeFilter}>
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
        <option value={400}>400</option>
        <option value={500}>500</option>
      </select>
    </div>
  );

}
export default Movie;
