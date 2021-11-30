import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Books from './components/books';
import Quotes from './components/quotes';
import Movie from './components/movie';
import  Character from "./components/character"

export default function Home() {
    return (
        <div>
            <Router>
                <ul>
                    <Link to="/books">books</Link><br />
                    <Link to="/Movie">movie</Link><br />
                    <Link to="/character">character</Link><br />
                </ul>
                <Routes>
                    <Route exact path='/books' element={<Books/>} />
                    <Route exact path='/movie/:id/quotes' element={<Quotes/>} />
                    <Route exact path='/Movie' element={<Movie/>} />
                    <Route exact path='/character' element={<Character/>} />
                </Routes>
            </Router>
        </div>
    );

}
