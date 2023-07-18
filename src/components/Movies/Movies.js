import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList drawSaved={false}/>
      {props.loading && <Preloader />}
    </>
  );
}

export default Movies;