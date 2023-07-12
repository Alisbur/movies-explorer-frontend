import './Navigation.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

function Navigation(props) {
  return (
    <nav className="navigation">
      <ul className="navigation__films-block">
        <li className="navigation__item">
          <NavLink to="#" className="navigation__link link-transparency navigation__link_active">Фильмы</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="#" className="navigation__link link-transparency">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      

      <ul className="navigation__account-block">
        <li className="navigation__item">
          <NavLink to="#" className="navigation__signup link-transparency">Регистрация</NavLink>
        </li>
        <li className="navigation__item">
          <button type="button" className="navigation__signin-button button-transparency">Войти</button>
        </li>
        <li className="navigation__item">
          <button type="button" className="navigation__account-button button-transparency">Аккаунт</button>
        </li>
        <li className="navigation__item">
          <button type="button" className="navigation__burger-button button-transparency" />
        </li>
      </ul>
    </nav>
  );
}
/*

      
      <div className="navigation__films-block">
        <NavLink to="#" className="navigation__link link-transparency navigation__link_active">Фильмы</NavLink>
        <NavLink to="#" className="navigation__link link-transparency">Сохранённые фильмы</NavLink>
      </div>
            <div className="navigation__account-block">
        <NavLink to="#" className="navigation__signup link-transparency">Регистрация</NavLink>
        <button type="button" className="navigation__signin-button button-transparency">Войти</button>
        <button type="button" className="navigation__account-button button-transparency">Аккаунт</button>
        <button type="button" className="navigation__burger-button button-transparency" />
      </div>

function Header(props) {

  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const { width } = useWindowDimensions();

  React.useEffect(function () {
    if (width>600) {
      setIsBurgerOpen(false);
    }
  }, [width]);

  function handleBurgerClick() {
    isBurgerOpen
      ? setIsBurgerOpen(false)
      : setIsBurgerOpen(true);
  }

  function handleLogoutClick() {
    props.onBtnClick();
  }

  return (
    <header>
      {isBurgerOpen && props.loggedIn
        ? (
          <div className="header header_type_burger">
            <span className="header__email header__email_type_burger">{props.email}</span>
            <button onClick={handleLogoutClick} className="header__btn header__btn_type_text link-transparency">Выйти</button>
          </div>)
        : (<></>)}

      <div className="header">
        <img src={logo} className="header__logo" alt="Логотип Movie Explorer" />
        <div className='header__nav'>
          {props.loggedIn 
            ? width > 600
              ? ( <>
                    {props.email && <span className="header__email">{props.email}</span>}
                    <button onClick={handleLogoutClick} className="header__btn header__btn_type_text link-transparency">Выйти</button>
                  </>)
              : (<button onClick={handleBurgerClick} className={isBurgerOpen ? "header__btn header__btn_type_close link-transparency" : "header__btn header__btn_type_burger link-transparency"}/>)
            : (<NavLink to={props.page==="/sign-up" ? "/sign-in" : "/sign-up"} className="header__link link-transparency">{props.page==="/sign-up" ? "Войти" : "Регистрация"}</NavLink>)
          }

        </div>
      </div>
    </header>
  );
}
*/

export default Navigation;