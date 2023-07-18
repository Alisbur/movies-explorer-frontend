import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filter-checkbox__label button-transparency">
    Короткометражки
      <input type="checkbox" className="filter-checkbox__checkbox_type_hidden" />
      <span className="filter-checkbox__checkbox_type_custom" />
    </label>
  );
}

export default FilterCheckbox;