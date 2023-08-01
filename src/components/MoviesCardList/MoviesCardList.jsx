import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import React, { useState, useEffect } from 'react';
import useWindowDimensions from "../../hooks/useWindowDimensions.js"

function MoviesCardList(props) {

  const [numberOfFilmsToShow, setNumberOfFilmsToShow] = useState(16);
  const [numberOfFilmsToAdd, setNumberOfFilmsToAdd] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(()=>{
    if (width>1279) {setNumberOfFilmsToShow(16); setNumberOfFilmsToAdd(8);}
    else if (width>1010) {setNumberOfFilmsToShow(12); setNumberOfFilmsToAdd(6);}
    else if (width>650) {setNumberOfFilmsToShow(8); setNumberOfFilmsToAdd(4);}
    else {setNumberOfFilmsToShow(5); setNumberOfFilmsToAdd(2);}
  },[]);

  useEffect(function () {
    if (width>1279) {setNumberOfFilmsToShow(16); setNumberOfFilmsToAdd(8);}
    else if (width>1010) {setNumberOfFilmsToShow(12); setNumberOfFilmsToAdd(6);}
    else if (width>650) {setNumberOfFilmsToShow(8); setNumberOfFilmsToAdd(4);}
    else {setNumberOfFilmsToShow(5); setNumberOfFilmsToAdd(2);}
  }, [width]);

  return (
    <section className="movies-card-list" aria-label="Галерея фотографий">
      <div className="movies-card-list__content">
        <div className="movies-card-list__items">
          {
              props.films.slice(0, props.drawSaved ? props.films.length : numberOfFilmsToShow).map((el, i) =>
                <MoviesCard
                  key = { i }
                  movie = { el }
                  handleLikeClick = { props.handleLikeClick }
                  handleDeleteClick = { props.handleDeleteClick }
                  drawSaved = { props.drawSaved }
                />)
          }
        </div>
        {!props.drawSaved && <div className="movies-card-list__more">
          {
            props.films.length>numberOfFilmsToShow && <button 
              type="button" 
              onClick={()=>setNumberOfFilmsToShow(numberOfFilmsToShow+numberOfFilmsToAdd)} 
              className="movies-card-list__more-button button-transparency" 
              aria-label="Загрузить больше фильмов">
            Ещё
            </button>
          }
        </div>}
      </div>
    </section>
  );
}

export default MoviesCardList;