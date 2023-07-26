import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <main className="main">
      <SearchForm />
      {props.listOfMovies
        ? <MoviesCardList drawSaved={false} films={props.listOfMovies}/>
        : <Preloader />
      }
    </main>
  );
}

export default Movies;