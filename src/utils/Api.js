import { moviesExplorerApiConfig } from './constants.js';

class Api {
  constructor({ server, moviesDataPath }) {
    this._server = server;
    this._moviesDataPath = moviesDataPath;
  }

  //Метод отправки запроса к серверу
  _requestServer(path, message) {
    return fetch(path, message)
      .then((res) => {
        if (res.ok) 
          return res.json();
        return Promise.reject(res.status);
      });
  }

  //Метод формирования запроса базы карточек
  getSavedMovies(token) {
    const path = this._server + this._moviesDataPath;
    return this._requestServer(path, {headers: {authorization: `Bearer ${token}`}});
  }

  //Метод формирования запроса на добавление фильма
  addMovie({ country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN }, token) {
    const path = this._server + this._moviesDataPath;
    const message = { 
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      })
    }
    return this._requestServer(path, message);
  }

  //Метод формирования запроса для удаления карточки
  deleteMovie({ movieId }, token) {
    const path = this._server + this._moviesDataPath + `/${movieId}`;
    const message = { 
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      }}
    return this._requestServer(path, message);
  }
}

const api = new Api(moviesExplorerApiConfig);

export default api;