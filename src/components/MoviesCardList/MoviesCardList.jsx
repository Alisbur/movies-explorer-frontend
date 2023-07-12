import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import React from 'react';
import films from '../../utils/dev_const'
/*import { CurrentUserContext } from '../contexts/CurrentUserContext.js';*/

function MoviesCardList(props) {

/*  const currentUser = React.useContext(CurrentUserContext);*/

  return (
    <main className="movies-card-list">
      <section className="movies-card-list__content" aria-label="Галерея фотографий">
        <div className="movies-card-list__items">
          {
            films.map((el, i) =>
              <MoviesCard
                key={el._id}
                card={el}
                drawSaved={props.drawSaved}
    /*            onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}*/
              />)
          }
        </div>
        <button type="button" className="movies-card-list__more-button button-transparency" aria-label="Загрузить больше фильмов">Ещё</button>
      </section>
    </main>
  );
}

export default MoviesCardList;