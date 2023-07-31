import './App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { movieDataFormatConverter, searchMovies, SHORT } from "../../utils/fncLib";

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

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({ 
    name: '', 
    email: '', 
    _id: '',
    token: ''
  });

  //Массив сохранённых фильмов
  const [savedMovies, setSavedMovies] = useState([]);
  //Залогинен ли пользователь
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Данные информационного попапа
  const [infoTooltip, setInfoTooltip] = useState({ 
    isInfoTooltipOpened:false,
    tooltipMessage:"",
    toolTipState:false
  });
  //Состояние бургера
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  //Текущая страница
  const [page, setPage] = useState('');
  
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
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({ name: '', email: '', _id: '', token: '' });
    navigate("/signin", {replace:true});
  }    

  //Обработчик проверки выполненной авторизации
  function handleAuthCheck() {
    const jwt = localStorage.getItem('token');
    console.log(jwt);
    if (jwt) {
      mainApi.authCheck(jwt)
        .then(({data}) => {
          setIsLoggedIn(true);
          setCurrentUser({ name: data.name, email: data.email, _id: data._id, token: jwt});
          getSavedMovies(jwt);
          navigate("/movies", {replace:true});
        })
        .catch((err) => {
          showInfoTooltip(`Не удалось войти в систему! Ошибка: ${err}`, false);
        });
    }
  }   

  //Получение списка сохранённых фильмов
  function getSavedMovies(jwt) {
    mainApi.getSavedMovies(jwt)
    .then(({data})=>setSavedMovies(data))
    .catch((err) => {
      showInfoTooltip(`Не удалось загрузить сохранённые фильмы! Ошибка: ${err}`, false)
    });
  }

  function handleLikeClick(movie) {
    movie.saved
    ? mainApi.deleteSavedMovie(movie, currentUser.token)
      .then(({data}) => console.log(data))
      .catch((err) => {
        showInfoTooltip(`Не удалось удалить фильм! Ошибка: ${err}`, false)})
      .finally(()=> getSavedMovies(currentUser.token))

    : mainApi.addSavedMovie(movie, currentUser.token)
      .then(({data}) => console.log(data))
      .catch((err) => {
        showInfoTooltip(`Не удалось сохранить фильм! Ошибка: ${err}`, false)})
      .finally(()=> getSavedMovies(currentUser.token))
  }

  function handleDeleteClick(movie) {
    mainApi.deleteSavedMovie(movie, currentUser.token)
      .then(({data}) => console.log(data))
      .catch((err) => {
        showInfoTooltip(`Не удалось удалить фильм! Ошибка: ${err}`, false)})
      .finally(()=> getSavedMovies(currentUser.token))
  }

/*
  function handleSearch(moviesArray, queryString) {
    return searchMovies(moviesArray, queryString);
  } */

  return (
    <div className="app">
      <CurrentUserContext.Provider value={ currentUser }>
        {((page==='/')||(page==='/movies')||(page==='/saved-movies')||(page==='/profile')) && 
          (<Header loggedIn={ isLoggedIn } isBurgerOpen={ isBurgerOpen } burgerClick={ handleBurgerClick }/>)}
        
        <Routes>
          <Route path="/signup" element={ <Register submitBtnCap='Зарегистрироваться' register={handleRegisterSubmit} title="Добро пожаловать!" /> } />
          <Route path="/signin" element={ <Login submitBtnCap='Войти' login={handleLoginSubmit} title="Рады видеть!" /> } />
          <Route path="/" element={ <Main loggedIn={isLoggedIn} />} />
          <Route path="/profile" element={ 
            <ProtectedRouteElement 
              element={ Profile } 
              updateUserData={handleUpdateUserData} 
              logout={handleLogout} 
              loggedIn={isLoggedIn} /> 
            } />
          <Route path="/movies" element={ 
            <ProtectedRouteElement 
              element={ Movies } 
              loggedIn={ isLoggedIn } 
/*              handleSearch={ handleSearch }*/
              handleLikeClick={ handleLikeClick }
              savedMovies = { savedMovies } /> 
          } />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement 
              element={ SavedMovies } 
              loggedIn={ isLoggedIn } 
              handleDeleteClick={ handleDeleteClick }
              savedMovies = { savedMovies } /> 
          } />
          <Route path="*" element={
            <ProtectedRouteElement 
              element={ Page404 } /> 
          } />          
          <Route path="*" element={ <Page404 />} />
        </Routes>
      </CurrentUserContext.Provider>
      
      {((location.pathname==='/')||(location.pathname==='/movies')||(location.pathname==='/saved-movies')) && 
        (<Footer />)}
      
      <InfoToolTip 
        isOpen={infoTooltip.isInfoTooltipOpened} 
        isOk={infoTooltip.toolTipState}
        message={infoTooltip.tooltipMessage}
        onClose={closeAllPopups} />
    </div>
  );
}

export default App;