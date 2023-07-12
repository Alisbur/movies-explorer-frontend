import photo from '../../images/me.jpg';
import './Portfolio.css';
import {NavLink} from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio" aria-label="Информация о студенте">
      <div className="portfolio__content">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__items">
          <li className="portfolio__item">
            <span className="portfolio__item-name">Статичный сайт</span>
            <NavLink to="https://alisbur.github.io/mesto/" className="portfolio__link link-transparency" target="_blank" />
          </li>
          <li className="portfolio__item">
            <span className="portfolio__item-name">Адаптивный сайт</span>
            <NavLink to="https://alisbur.github.io/russian-travel/" className="portfolio__link link-transparency" target="_blank" />
          </li>
          <li className="portfolio__item">
            <span className="portfolio__item-name">Одностраничное приложение</span>
            <NavLink to="https://alisbur.github.io/react-mesto-auth/cards" className="portfolio__link link-transparency" target="_blank" />
          </li>                
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;