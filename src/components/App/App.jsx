import React, { useState } from 'react';
import { Navigate, useNavigate, useLocation, Routes, Route } from "react-router-dom";
import './App.css';

import Header from '../Header/Header';
import Page404 from '../Page404/Page404';
import Preloader from '../Preloader/Preloader';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Search from '../SearchForm/SearchForm';
import More from '../More/More';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Cards from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import AuthForm from '../AuthForm/AuthForm';
/*import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmPopup from './ConfirmPopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import auth from '../utils/Auth.js';*/
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/*import InfoTooltip from './InfoTooltip.js';*/

function handleRegisterSubmit() { };
function handleLoginSubmit() { };
function handleEditProfileClick() { };
function handleAddPlaceClick() { };
function handleEditAvatarClick() { };
function handleCardClick() { };
function handleCardLike() { };
function handleCardDelete() { };


function App() {

  const [currentUser, setCurrentUser] = useState({ name: '', about: '', avatar: '', _id: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header isPromo={true} />
        <Movies />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

/*
        <Page404 />
        <Preloader />
        <Register submitBtnCap='Зарегистрироваться' title="Добро пожаловать!" onSubmit={()=>{}} />
        <Login submitBtnCap='Войти' title="Рады видеть!" onSubmit={()=>{}} />
        <Profile />
        <Search />
        <Cards />
        <More />
*/

export default App;