import './MoviesCard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function MoviesCard(props) {

  const timeToStr = (min) => `${Math.floor(min/60)>0 ? Math.floor(min/60)+"ч" : ""}${min%60>0 ? min%60+"м" : ""}`;
  const { trailerLink, image, nameRU, duration } = props.card;
  const { url } = image;

  return (
    <article className="movies-card">
      <NavLink to={ trailerLink } target="_blank">
        <img src={`https://api.nomoreparties.co/${url}`} onClick={()=>{}} className="movies-card__item-image" alt={`Изображение ${nameRU}`} />
      </NavLink>
      <div className="movies-card__item-info">
        <div className="movies-card__like-div">
          <h2 className="movies-card__item-title">{nameRU}</h2>

          {props.drawSaved 
            ? (<button type="button" onClick={()=>{}} className="movies-card__delete-button button-transparency" aria-label="Удалить"></button>)
            : (<button type="button" onClick={()=>{}} className={`movies-card__like-button ${props.card.saved && "movies-card__like-button_active"} button-transparency`} aria-label="Сохранить"></button>)
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