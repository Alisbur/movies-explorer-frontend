import photo from '../../images/me.jpg';
import './AboutMe.css';
import {NavLink} from 'react-router-dom';

function AboutMe() {
  return (
    <section className="aboutme" aria-label="Информация о студенте">
      <div className="aboutme__content">
        <h2 className="aboutme__title">Студент</h2>
        <div className="aboutme__profile">
          <div className="aboutme__data">
            <div className="aboutme__about">
              <h3 className="aboutme__name">Евгений</h3>
              <p className="aboutme__brief">Начинающий фронтэнд-разработчик 39 лет</p>
              <p className="aboutme__biography">Родился и живу в Санкт-Петербурге. Есть семья, дети. 
              Фронтэнд-разработка и программирование интересны ещё с университета, и я хочу 
              актуализировать свои знания и развиваться в этом направлении.</p>
            </div>
            <NavLink to="https://github.com/Alisbur" className="aboutme__link link-transparency" target="_blank">GitHub</NavLink>
          </div>
          <img src={photo} className="aboutme__photo" alt="Фото студента" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;