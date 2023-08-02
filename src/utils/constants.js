//продолжительность короткометражки
export const SHORT = 40;

//Данные для api связи с сервером Beatfilm
export const beatfilmMoviesApiConfig = {
  server: 'https://api.nomoreparties.co/beatfilm-movies',
  baseUrl: 'https://api.nomoreparties.co/',
};

//Данные для api связи с сервером moviesExplorer
export const moviesExplorerApiConfig = {
/*  server: 'https://api.alisbur-diploma.nomoreparties.sbs',*/
  server: 'https://api.alisbur-diploma.nomoreparties.sbs',
  registerPath : '/signup',
  loginPath : '/signin',
  authCheckPath : '/users/me',
  profileDataPath : '/users/me',
  moviesDataPath : '/movies',
};

