import { beatfilmMoviesApiConfig } from './constants.js';

const { baseUrl } = beatfilmMoviesApiConfig;

export const SHORT = 40;

export function movieDataFormatConverter(data) {
  return {
    country : data.country,
    director : data.director ,
    duration : data.duration,
    year : data.year,
    description : data.description,
    image: baseUrl + data.image.url,
    trailerLink: data.trailerLink,
    thumbnail: baseUrl + data.image.formats.thumbnail.url,
    movieId: data.id,
    nameRU: data.nameRU,
    nameEN: data.nameEN,
    saved: false
  }
}

export function searchMovies(moviesArray, str) {
  const regex = new RegExp(str,'i');
  return moviesArray.filter((el) => {return regex.test(el.nameRU)||regex.test(el.nameEN)});
}

//устанавливает сохранённым фильмам свойство saved в true
export function updateSavedMovies(moviesArray, savedArray) {
  if(!moviesArray.length)
    return moviesArray;
  const listOfSaved = savedArray.map(el=>el.movieId);
  console.log(`listOfSaved - ${listOfSaved}`);
  return moviesArray.map(el=>{return {...el, saved : listOfSaved.includes(el.movieId)}})
}