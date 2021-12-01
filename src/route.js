import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Books from './components/books';
import Quotes from './components/quotes';
import Movie from './components/movie';
import  Character from "./components/character"
import { Nav,Navbar,Container } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/books">Books</Nav.Link>
                <Nav.Link href="/Movie">Movie</Nav.Link>
                <Nav.Link href="/character">Character</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      </>
      <Router>
        <Routes>
          <Route exact path='/books' element={<Books/>} />
          <Route exact path='/movie/:id/qoutes' element={<Quotes/>} />
          <Route exact path='/Movie' element={<Movie/>} />
          <Route exact path='/character' element={<Character/>} />
        </Routes>
      </Router>
    </div>
 );
}
