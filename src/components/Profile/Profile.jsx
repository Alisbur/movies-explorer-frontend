import './Profile.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Profile(props) {
  return (
    <section className="profile">
      <div className="profile__content">
        <h2 className="profile__title">Привет Евгений!</h2>
        <ul className="profile__data">
          <li className="profile__item">
            <ul className="profile__item-content">
              <li className="profile__item-name">Имя</li>
              <li className="profile__item-data">Alisburrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</li>
            </ul>
          </li>
          <li className="profile__item">
            <ul className="profile__item-content">
              <li className="profile__item-name">E-mail</li>
              <li className="profile__item-data">test@test.test</li>
            </ul>
          </li>
        </ul>
        <NavLink to="" className="profile__edit link-transparency">Редактировать</NavLink>
        <NavLink to="" className="profile__exit link-transparency">Выйти из аккаунта</NavLink>
      </div>
    </section>
  );
}

export default Profile;