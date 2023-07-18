import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import React, { useState, useEffect } from 'react';
import films from '../../utils/dev_const' //Временные данные

function MoviesCardList(props) {

  const [numberOfFilmsToShow, setNumberOfFilmsToShow] = useState(16);

  useEffect(()=>{
    setNumberOfFilmsToShow(16);
  },[]);

  return (
    <main className="movies-card-list">
      <section className="movies-card-list__content" aria-label="Галерея фотографий">
        <div className="movies-card-list__items">
          {
            films.slice(0, numberOfFilmsToShow).map((el, i) =>
              <MoviesCard
                key={i}
                card={el}
                drawSaved={props.drawSaved}
              />)
          }
        </div>
        <button type="button" onClick={()=>setNumberOfFilmsToShow(numberOfFilmsToShow+8)} className="movies-card-list__more-button button-transparency" aria-label="Загрузить больше фильмов">Ещё</button>
      </section>
    </main>
  );
}

export default MoviesCardList;