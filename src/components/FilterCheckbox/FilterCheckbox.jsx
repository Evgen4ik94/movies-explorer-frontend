import './FilterCheckbox.css';

export default function FilterCheckbox({ shortMovies, handleShortMoviesCheck }) {
  return (
    <label className="filter" title='Показать короткометражки'>
        <input
          type="checkbox"
          className="filter__checkbox"
          onChange={handleShortMoviesCheck}
          defaultChecked={shortMovies ? true : false}
        />
        <span className="filter__btn"></span>
        <span className="filter__text">Короткометражки</span>
    </label>
  );
}
