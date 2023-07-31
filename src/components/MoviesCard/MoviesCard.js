import './MoviesCard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function MoviesCard(props) {

  const [isSaved, setIsSaved] = React.useState(false);
  const timeToStr = (min) => `${Math.floor(min/60)>0 ? Math.floor(min/60)+"ч" : ""}${min%60>0 ? min%60+"м" : ""}`;
  const { trailerLink, image, nameRU, duration, saved } = props.movie;

  function handleLikeClick() {
    console.log(props.movie);
    props.handleLikeClick(props.movie);
  }

  function handleDeleteClick() {
    console.log(props.movie);
    props.handleDeleteClick(props.movie);
  }

  return (
    <article className="movies-card">
      <NavLink to={ trailerLink } target="_blank">
        <img src={ image } onClick={()=>{}} className="movies-card__item-image" alt={`Изображение ${nameRU}`} />
      </NavLink>
      <div className="movies-card__item-info">
        <div className="movies-card__like-div">
          <h2 className="movies-card__item-title">{nameRU}</h2>

          {props.drawSaved 
            ? (<button type="button" onClick={ handleDeleteClick } className="movies-card__delete-button button-transparency" aria-label="Удалить"></button>)
            : (<button type="button" onClick={ handleLikeClick } className={`movies-card__like-button ${saved && "movies-card__like-button_active"} button-transparency`} aria-label={`${props.movie.saved ? "Удалить" : "Сохранить"}`} ></button>)
          }
        </div>        
        <p className="movies-card__duration">{timeToStr(duration)}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

/*

          <button type="button" onClick={()=>{}} 
          className={`${props.drawSaved ? 'movies-card__delete-button' : 'movies-card__like-button'} ${props.card.saved && "movies-card__like-button_active"} button-transparency`
            } aria-label="Поставить лайк"></button>

*/