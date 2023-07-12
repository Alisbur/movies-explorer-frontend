import './SearchForm.css';
import {NavLink} from "react-router-dom";

function SearchForm() {

  return (
    <section className="search-form" aria-label="Поиск фильмов">
      <div className="search-form__content">
        <form className="search-form__form" name="search-form-form">
          <fieldset className="search-form__fieldset">
            <input type="text" className="search-form__input" placeholder="Фильм" name="search-form-input" required />
            <button type="submit" className="search-form__button button-transparency" name="search-form-button" />
          </fieldset>
          <label className="search-form__label button-transparency">
            Короткометражки
            <input type="checkbox" className="search-form__checkbox_type_hidden" />
            <span className="search-form__checkbox_type_custom" />
          </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;