import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" name="search">
        <div className="search__input-placeholder">
          <input
            className="search__input"
            name="search"
            type="text"
            placeholder="Фильм"
            required
          />
          <div alt="Поиск" class="search-icon"></div>
        </div>
        <button className="search__button" type="submit"></button>
        <h2 className="vertical-line"></h2>
      </form>
      <FilterCheckbox />
    </section>
  );
}
