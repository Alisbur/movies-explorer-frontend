//Данные для api связи с сервером Beatfilm
export const beatfilmMoviesApiConfig = {
  server: 'https://api.nomoreparties.co/beatfilm-movies',
};

//Данные для api связи с сервером moviesExplorer
export const moviesExplorerApiConfig = {
/*  server: 'https://api.alisbur-diploma.nomoreparties.sbs',*/
  server: 'http://localhost:3001',
  registerPath : '/signup',
  loginPath : '/signin',
  authCheckPath : '/users/me',
  profileDataPath : '/users/me',
  moviesDataPath : '/movies',
};
