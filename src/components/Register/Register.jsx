import logo from '../../images/logo.svg';
import './Register.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import { useValidation } from "../../hooks/useValidation";

function Register(props) {

  const {values, setValues, errors, setErrors, isValid, setIsValid, handleChange, resetForm} = useValidation();

  React.useEffect(()=>{
    if(props.spanText) {
      resetForm({email:'', password:''},{email:'', password:''}, false);
    }
  },[,props.title]);

  function handleSubmit(e) {
    e.preventDefault();
/*    props.onSubmit(values); */
  } 

  return (
    <section className="register">
      <div className="register__content">
        <form className="register__form" name="register-form" onSubmit={()=>{}}>
          <NavLink to=""><img src={logo} className="register__logo" alt="лого сайта" /></NavLink>
          <h2 className="register__title">{props.title}</h2>
          <fieldset className="register__fieldset">
            <label className="register__fieldset-name">Имя</label>
            <input type="text" value={values.name ? values.name : ""} onChange={handleChange} className="register__input" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
            <span className={`register__input-error ${!isValid ? "register__input-error_visible" : "" }`}>{errors.name}</span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__fieldset-name">E-mail</label>
            <input type="email" value={values.email ? values.email : ""} onChange={handleChange} className="register__input" placeholder="Адрес электронной почты" name="email" required minLength="2" maxLength="40" />
            <span className={`register__input-error ${!isValid ? "register__input-error_visible" : "" }`}>{errors.email}</span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__fieldset-name">Пароль</label>
            <input type="password" value={values.password ? values.password : ""} onChange={handleChange} className="register__input" placeholder="Пароль" name="password" required minLength="4" maxLength="40" autoComplete="new-password" />
            <span className={`register__input-error ${!isValid ? "register__input-error_visible" : "" }`}>{errors.password}</span>
          </fieldset>
          <button type="submit" className={`register__submit-button ${!isValid ? "register__submit-button_inactive" : "button-transparency"}`} name="submitBtn" disabled={!isValid}>{`Зарегистрироваться`/*props.submitBtnCap*/}</button>
            <span className="register__span-text">Уже зарегистрированы? <NavLink to="#" className="register__link link-transparency">Войти</NavLink></span>
        </form>
      </div>
    </section>
  );
}

export default Register;