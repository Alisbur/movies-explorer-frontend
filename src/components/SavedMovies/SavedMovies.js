import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <>
      <MoviesCardList drawSaved={true}/>
      {props.loading && <Preloader />}
    </>
  );
}

export default SavedMovies;