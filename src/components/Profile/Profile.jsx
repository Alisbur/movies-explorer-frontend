import './Profile.css';
import React from 'react';
import { useNavigate} from "react-router-dom";
import { useValidation } from "../../hooks/useValidation";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

  const {values, setValues, errors, setErrors, isValid, setIsValid, handleChange, resetForm} = useValidation();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(()=>{
    resetForm({name:currentUser.name, email:currentUser.email},{name:'', email:''}, false);
  },[]);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    props.updateUserData(values.name, values.email);
  }

  function handleLogout() {
    props.logout();
  }

  return (
    <section className="profile" aria-label="Страница редактирования данных профиля пользователя">
      <form className="profile__content" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет Евгений!</h2>
        <ul className="profile__data">
          <li className="profile__item">
            <ul className="profile__item-content">
              <li className="profile__item-name">Имя</li>
              <li className="profile__item-data">
                <input type="text" value={values.name ? values.name : ""} onChange={handleChange} className={`profile__input ${errors.name && "profile__input_type_error"}`} name="name" required minLength="2" maxLength="40" aria-label="Имя пользователя"/>
              </li>
            </ul>
          </li>
          <li className={`profile__input-error ${!isValid ? "profile__input-error_visible" : "" }`}>{errors.name}</li>
          <li className="profile__item">
            <ul className="profile__item-content">
              <li className="profile__item-name">E-mail</li>
              <li className="profile__item-data">
                <input type="email" value={values.email ? values.email : ""} onChange={handleChange} className={`profile__input ${errors.email && "profile__input_type_error"}`} name="email" required minLength="2" maxLength="40" aria-label="Адрес электронной почты"/>
              </li>
            </ul>
          </li>
          <li className={`profile__input-error ${!isValid ? "profile__input-error_visible" : "" }`}>{errors.email}</li>          
        </ul>
        <button type="submit" className={`profile__save-button ${isValid ? "link-transparency" : "profile__save-button_type_inactive"}`} disabled={!isValid} >Редактировать</button>
        <button type="button" className="profile__exit-button link-transparency" onClick={handleLogout}>Выйти из аккаунта</button>
      </form>
    </section>

  );
}

export default Profile;