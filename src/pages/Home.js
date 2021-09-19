import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { getMovieList } from '../utils/globalAPI';

import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import SearchBox from '../components/SearchBoxAutoComplete';

import { getListMovie } from '../store/home/action';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const fetchMovies = async (searchValue) => {
    await getMovieList(searchValue).then((response) => {
      props.getListMovie(response.Search);
    })
  }

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue])

  return (
    <Router>
      <div className="header row align-items-center justify-content-between">
        <div className="col">
          <h1>Movies</h1>
        </div>
        <div className="col searchbar">
          <SearchBox movies={props.movies} searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
      <div className="">
        <Route exact path="/">
          <MovieList movies={props.movies} />
        </Route>
        <Route exact path={`/:title/detail`}>
          <MovieDetail />
        </Route>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.home.listMovie,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getListMovie: (e) => dispatch(getListMovie(e)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
