import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import SearchBar from '../components/SearchBar';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { getMovieList } from '../utils/globalAPI';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchMovies = async (searchValue) => {
    await getMovieList(searchValue).then((response) => {
      setMovies(response.Search);
    })
  }

  useEffect (() => {
    fetchMovies(searchValue);
  }, [searchValue])

  return (
    <Router>
      <div className="header row align-items-center justify-content-between">
        <div className="col">
          <h1>Movies</h1>
        </div>
        <div className="col searchbar">
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}  />
        </div>
      </div>
      <div className="">
        <Route exact path="/">
          <MovieList movies={movies} />
        </Route>
        <Route exact path={`/:title/detail`}>
          <MovieDetail />
        </Route>
      </div>
    </Router>
  );
}

export default Home;
