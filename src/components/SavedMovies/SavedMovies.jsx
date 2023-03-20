import './SavedMovies.css';

import { useState, useContext, useEffect } from 'react';
import { filterMoviesList, sortShortMovies, } from '../../utils/utils.js';
import { PHRASES } from '../../utils/constants';

import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

function SavedMovies({ onRemoveClick, addedMoviesList, errorPopup }) {
  const currentUser = useContext(CurrentUserContext); // Подключаем контекст

  const [shortMoviesCheck, setShortMoviesCheck] = useState(false); // Стейт чекбокса короткометражек
  const [queryMovies, setQueryMovies] = useState(addedMoviesList); // Список фильмов по запросу
  const [filteredMoviesList, setFilteredMoviesList] = useState([]); // Фильмы, отображаемые по запросу и отфильтрованные чекбоксом
  const [NotFound, setNotFound] = useState(false); // Если фильмы по запросу не найдены
  const {notfound} = PHRASES;

  
  // Локальное состояние чекбокса
  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortSavedMovies`) === 'true') {
      setShortMoviesCheck(true);
      setQueryMovies(sortShortMovies(addedMoviesList));
    } 
    else {
      setShortMoviesCheck(false);
      setQueryMovies(addedMoviesList);
    }
  }, [addedMoviesList, currentUser]);

  // Проверка, не пуст ли список сохраненных фильмов
  useEffect(() => {
    setFilteredMoviesList(addedMoviesList);
    addedMoviesList.length === 0 ? setNotFound(true) : setNotFound(false);
  }, [addedMoviesList]);

  // Отображение фильмов по запросу в поисковой строке
  function handleSearchFormSubmit(userReq) {
    const movies = filterMoviesList(addedMoviesList, userReq, shortMoviesCheck);
    // Если список сохраненных фильмов пуст - выдаем попап Not Found
    if (movies.length === 0) {
      setNotFound(true);
      errorPopup(notfound);
    } 
    else {
      setNotFound(false);
      setFilteredMoviesList(movies);
      setQueryMovies(movies);
    }
  }

  // Отображение короткометражек
  function handleShortMoviesCheck() {
    if (shortMoviesCheck) {
      setShortMoviesCheck(false);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, false);
      filteredMoviesList.length === 0 ? setNotFound(true) : setNotFound(false);
      setQueryMovies(filteredMoviesList);
    } 
    else {
      setShortMoviesCheck(true);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, true);
      setQueryMovies(sortShortMovies(filteredMoviesList));
      sortShortMovies(filteredMoviesList).length === 0 ? setNotFound(true) : setNotFound(false);
    }
  }

  return (

    <main className="saved-movies">
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        handleShortMoviesCheck={handleShortMoviesCheck}
        shortMovies={shortMoviesCheck}
      />
      
      {!NotFound && 
        (
          <MoviesCardList
            moviesList={queryMovies}
            addedMoviesList={addedMoviesList}
            onRemoveClick={onRemoveClick}
          />
        )
      }
    </main>
  );
}

export default SavedMovies;