import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label id="chk-label" className="filter-checkbox__label button-transparency" aria-label="фильтр короткометражных фильмов">
    Короткометражки
      <input type="checkbox" className="filter-checkbox__checkbox_type_hidden" />
      <span className="filter-checkbox__checkbox_type_custom" role="checkbox" aria-checked="false" tabIndex="0" aria-labelledby="chk-label"/>
    </label>
  );
}

export default FilterCheckbox;