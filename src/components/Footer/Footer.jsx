import './Footer.css';
import {NavLink} from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__credentials">
          <span className="footer__copyright">&#64; {currentYear}</span>
          <ul className="footer__nav-links">
            <li><NavLink to="#" className="footer__nav-link link-transparency">Яндекс.Практикум</NavLink></li>
            <li><NavLink to="#" className="footer__nav-link link-transparency">Github</NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;