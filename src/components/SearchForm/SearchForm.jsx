import "./SearchForm.css";

import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PHRASES } from "../../utils/constants";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';
import useValidationForm from "../../hooks/useValidationForm";

function SearchForm({ handleSearchFormSubmit, handleShortMoviesCheck, shortMoviesList }) {
  const location = useLocation();
  const {search_error} = PHRASES;
  const currentUser = useContext(CurrentUserContext); // Подключаем контекст
  const [errorRes, setErrorRes] = useState('');
  const { values, handleChangeForm, isValid, setIsValid, resetFormInputs } = useValidationForm();

// Стираем сообщение об ошибке валидации
useEffect(() => {
  setErrorRes('')
}, [isValid]);

// Локальное состояние поля ввода формы
useEffect(() => {
  if (localStorage.getItem(`${currentUser.email} - movieSearch`) && location.pathname === '/movies') {
      const inputValue = localStorage.getItem(`${currentUser.email} - movieSearch`);
      values.search = inputValue;
      setIsValid(true);
  }
   // eslint-disable-next-line
}, [currentUser]);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    return isValid ? handleSearchFormSubmit(values.search) : setErrorRes(search_error);
  };

// Сброс полей формы
useEffect(() => {
  resetFormInputs();
}, [resetFormInputs]);

  return (

    <section className="search">
      <form
        name="search"
        className="search__form"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="search__input-placeholder">
          <input
            name="search"
            type="text"
            className="search__input"
            placeholder="Фильм"
            value={values.search || ''}
            onChange={handleChangeForm}
            required
          />
          <div alt="Поиск" className="search-icon"></div>
        </div>
        <span className="search__input_error">{errorRes}</span>

        <button className="search__btn" type="submit"></button>
        <h2 className="vertical-line"></h2>
      </form>
      <FilterCheckbox
        shortMoviesList={shortMoviesList}
        handleShortMoviesCheck={handleShortMoviesCheck}
        onChange={handleShortMoviesCheck} />
    </section>

  );
}


export default SearchForm;
