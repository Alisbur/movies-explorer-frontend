import React, { useState } from 'react';
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Page404 from '../Page404/Page404';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import InfoToolTip from '../InfoToolTip/InfoTooltip';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi';

import { films, savedFilms } from '../../utils/dev_const' //Временные данные

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({ 
    name: '', 
    email: '', 
    _id: '',
    token: ''
  });

  const [moviesData, setMoviesData] = useState(null);
  const [savedMoviesData, setSavedMoviesData] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [infoTooltip, setInfoTooltip] = useState({ 
    isInfoTooltipOpened:false,
    tooltipMessage:"",
    toolTipState:false
  });

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
/*  const [cards, setCards] = useState([]); */
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState('');
  
  //Получаем с сервера список фильмов
  React.useEffect(function () {
    if (isLoggedIn) {
      setIsLoading(true);
      moviesApi.getInitialMovies()
        .then((data) => {
          setMoviesData(data);
        })
        .catch((err) => {
          showInfoTooltip(`е удалось загрузить данные фильмов! Ошибка: ${err}`, false);
        })
        .finally(()=>{
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  //Определяем текущую страницу
  React.useEffect(() => {
    setPage(location.pathname);
  }, [location]);

  //Проверяем аутентифицирован ли пользователь
  React.useEffect(() => {
    handleAuthCheck();
  }, [])

  //Обработчик закрытия попапов и бургера
  function closeAllPopups() {
    setInfoTooltip({ ...infoTooltip, isInfoTooltipOpened:false });
    setIsBurgerOpen(false);
  }

  //Обработчик нажатия на кнопку бургера
  function handleBurgerClick(currentState) {
    currentState
      ? setIsBurgerOpen(false)
      : setIsBurgerOpen(true);
  }

  //Открытие модалки с сообщением
  function showInfoTooltip(message, isOk) {
    setInfoTooltip({    
      isInfoTooltipOpened: true,
      tooltipMessage: message,
      toolTipState: isOk
    });
  }

  //Обработчик регистрации нового пользователя на сервере  
  function handleRegisterSubmit( newUserData ) {
    console.log(newUserData);
    mainApi.register(newUserData)
      .then((data) => {
        showInfoTooltip(`Регистрация прошла успешно!`, true);
        navigate("/signin", {replace:true});
      })
      .catch((err) => {
        showInfoTooltip(`Не удалось зарегистрировать пользователя! Ошибка: ${err}`, false);
      });
  }  

  //Обработчик авторизации пользователя на сервере
  function handleLoginSubmit( userData ) {
    mainApi.login(userData)
      .then((data) => {
        localStorage.setItem('token', data.token);
        handleAuthCheck();
      })
      .catch((err) => {
        showInfoTooltip(`Не удалось войти в систему! Ошибка: ${err}`, false);
      })
  }
  
 //Обработчик сохранения новых данных пользователя на сервере
 function handleUpdateUserData(newUserData) {
  mainApi.modifyProfileData(newUserData, currentUser.token)
    .then(({ data }) => {
      setCurrentUser({...currentUser, name: data.name, email: data.email });
      showInfoTooltip(`Данные успешно изменены!`, true);
    })
    .catch((err) => {
      showInfoTooltip(`Не удалось сохранить новые данные профиля! Ошибка: ${err}`, false);
    });
}

  //Обработчик авторизации пользователя на сервере
  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('moviesList');
    setIsLoggedIn(false);
    setCurrentUser({ name: '', email: '', _id: '', token: '' });
/*    setMoviesData(null);*/
    navigate("/signin", {replace:true});
  }    

  //Обработчик проверки выполненной авторизации
  function handleAuthCheck() {
    const jwt = localStorage.getItem('token');
    const moviesList = localStorage.getItem('moviesList');
    console.log(jwt);
    if (jwt) {
      mainApi.authCheck(jwt)
        .then(({data}) => {
          if((moviesList)&&(moviesData===null)) {
            setMoviesData(moviesList);
          }
          setIsLoggedIn(true);
          setCurrentUser({ name: data.name, email: data.email, _id: data._id, token: jwt});
          navigate("/movies", {replace:true});
        })
        .catch((err) => {
          showInfoTooltip(`Не удалось войти в систему! Ошибка: ${err}`, false);
        });
    }
  }   


/*
  //Заглушка обработчика регистрации
  function handleRegister() {
    showInfoTooltip("Вы успешно зарегистрировались!", true)
    navigate("/signin", {replace:true});
  }

  //Заглушка обработчика логина
  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/movies", {replace:true});
  }

  //Заглушка обработчика логаута
  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/", {replace:true});
  }

  //Заглушка обработчика редактирования данных пользователя
  function handleUpdateUserData(name, email) {
    setCurrentUser({...currentUser, ['name']: name, ['email']: email})
    showInfoTooltip("Вы успешно изменили данные профиля!", true)
    navigate("/movies", {replace:true});
  }

  */

  return (
    <div className="app">
      <CurrentUserContext.Provider value={ currentUser }>
        {((page==='/')||(page==='/movies')||(page==='/saved-movies')||(page==='/profile')) && 
          (<Header loggedIn={ isLoggedIn } isBurgerOpen={ isBurgerOpen } burgerClick={ handleBurgerClick }/>)}
        <Routes>
          <Route path="/signup" element={ <Register submitBtnCap='Зарегистрироваться' register={handleRegisterSubmit} title="Добро пожаловать!" /> } />
          <Route path="/signin" element={ <Login submitBtnCap='Войти' login={handleLoginSubmit} title="Рады видеть!" /> } />
          <Route path="/" element={ <Main loggedIn={isLoggedIn} />} />
          <Route path="*" element={ <Page404 prev="/" />} />
          <Route path="/profile" element={ <ProtectedRouteElement element={Profile} updateUserData={handleUpdateUserData} logout={handleLogout} loggedIn={isLoggedIn} /> } />
          <Route path="/movies" element={ <ProtectedRouteElement element={Movies} loggedIn={isLoggedIn} loading={isLoading} listOfMovies={moviesData}/> } />
          <Route path="/saved-movies" element={ <ProtectedRouteElement element={SavedMovies} loggedIn={isLoggedIn} loading={isLoading} listOfMovies={moviesData}/> } />
        </Routes>
      </CurrentUserContext.Provider>
      
      {((location.pathname==='/')||(location.pathname==='/movies')||(location.pathname==='/saved-movies')) && (<Footer />)}
      
      <InfoToolTip 
        isOpen={infoTooltip.isInfoTooltipOpened} 
        isOk={infoTooltip.toolTipState}
        message={infoTooltip.tooltipMessage}
        onClose={closeAllPopups} />
    </div>
  );
}

export default App;