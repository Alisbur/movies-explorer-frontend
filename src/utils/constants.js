//продолжительность короткометражки
export const SHORT = 40;
export const FILMS_TO_SHOW_4_COLS = 16;
export const FILMS_TO_ADD_4_COLS = 4;
export const FILMS_TO_SHOW_3_COLS =12;
export const FILMS_TO_ADD_3_COLS = 3;
export const FILMS_TO_SHOW_2_COLS = 8;
export const FILMS_TO_ADD_2_COLS = 2;
export const FILMS_TO_SHOW_1_COL = 5;
export const FILMS_TO_ADD_1_COL = 2;
export const MAX_WINDOW_WIDTH_3_COLS = 1279;
export const MAX_WINDOW_WIDTH_2_COLS = 1010;
export const MAX_WINDOW_WIDTH_1_COL = 650;

//регулярка валидации e-mail
export const REGEXP_EMAIL = "[a-zA-Z0-9\\-\\._~:/?#[\\]@!$&'()*+,;=]+@[a-zA-Z0-9\\-\\._~:\\/?#[\\]@!$&'()*+,;=]+\\.[a-zA-Z]+";
/*export const REGEXP_EMAIL = "^[a-zA-Z0-9\-._~:\/?#[\]@!$&'()*+,;=]+@[a-zA-Z0-9\-._~:\/?#[\]@!$&'()*+,;=]+\.[a-zA-Z]+$";*/

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

