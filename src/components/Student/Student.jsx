import photo from '../../images/me.jpg';
import './Student.css';
import {NavLink} from 'react-router-dom';

function Student() {
  return (
    <section className="student">
      <div className="student__content">
        <h2 className="student__title">Студент</h2>
        <div className="student__profile">
          <div className="student__data">
            <div className="student__about">
              <h3 className="student__name">Евгений</h3>
              <p className="student__brief">Начинающий фронтэнд-разработчик 39 лет</p>
              <p className="student__biography">Родился и живу в Санкт-Петербурге. Есть семья, дети. 
              Фронтэнд-разработка и программирование интересны ещё с университета, и я хочу 
              актуализировать свои знания и развиваться в этом направлении.</p>
            </div>
            <NavLink to="#" className="student__link link-transparency">GitHub</NavLink>
          </div>
          <img src={photo} className="student__photo" alt="Фото студента" />
        </div>
        <h4 className="student__portfolio-title">Портфолио</h4>
        <ul className="student__portfolio">
          <li className="student__portfolio-item">
            <span className="student__portfolio-item-name">Статичный сайт</span>
            <NavLink to="#" className="student__portfolio-link link-transparency" />
          </li>
          <li className="student__portfolio-item">
            <span className="student__portfolio-item-name">Адаптивный сайт</span>
            <NavLink to="#" className="student__portfolio-link link-transparency" />
          </li>
          <li className="student__portfolio-item">
            <span className="student__portfolio-item-name">Одностраничное приложение</span>
            <NavLink to="#" className="student__portfolio-link link-transparency" />
          </li>                
        </ul>
      </div>
    </section>
  );
}

export default Student;