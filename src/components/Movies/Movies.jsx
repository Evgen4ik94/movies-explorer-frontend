import './Movies.css';

import { useState, useContext, useEffect } from 'react';
import {convertMovie, filterMoviesList, sortShortMovies} from '../../utils/utils.js';

import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import moviesApi from '../../utils/MoviesApi.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

function Movies({setIsLoaderOn, setIsInfoTooltipOpen, addedMoviesList,onRemoveClick, onAddClick}) {
  const currentUser = useContext(CurrentUserContext); // Подключаем контекст

  const [isAllMoviesList, setIsAllMoviesList] = useState([]); // Список всех фильмов на сервере
  const [queryMovies, setQueryMovies] = useState([]); // Список фильмов по запросу

  const [shortMoviesCheck, setShortMoviesCheck] = useState(false); // Стейт чекбокса короткометражек
  const [filteredMoviesList, setFilteredMoviesList] = useState([]); // Фильмы, отображаемые по запросу и отфильтрованные чекбоксом

  const [NotFound, setNotFound] = useState(false); // Если фильмы по запросу не найдены


  // Поиск фильмов по базе
  function handleSetMoviesList(moviesList, userQuery, shortMoviesCheckbox) {
    const movies = filterMoviesList(moviesList, userQuery, shortMoviesCheckbox);
    if (movies.length === 0) {
      setIsInfoTooltipOpen({
        isOpen: true,
        successful: false,
        text: 'Фильмы по Вашему запросу не найдены.\n Введите другое название.',
      });
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setQueryMovies(movies);
    setFilteredMoviesList(shortMoviesCheckbox ? sortShortMovies(movies) : movies);
    localStorage.setItem(`${currentUser.email} - movies`, JSON.stringify(movies));
  }

  // Поиск фильмов по запросу
  function handleSearchFormSubmit(inputValue) {
    localStorage.setItem(`${currentUser.email} - movieSearch`, inputValue);
    localStorage.setItem(`${currentUser.email} - shortMovies`, shortMoviesCheck);

    if (isAllMoviesList.length === 0) {
        setIsLoaderOn(true);
        moviesApi
          .getMoviesData()
          .then(moviesList => {
            setIsAllMoviesList(moviesList);
            handleSetMoviesList(
              convertMovie(moviesList),
              inputValue,
              shortMoviesCheck
            );
          })
          .catch(() =>
            setIsInfoTooltipOpen({
              isOpen: true,
              successful: false,
              text: 'На сервере произошла ошибка. Подождите немного и попробуйте ещё раз.',
            })
          )
          .finally(() => setIsLoaderOn(false));
        } else {
        handleSetMoviesList(isAllMoviesList, inputValue, shortMoviesCheck);
      }
    }

  // Установка состояния чекбокса короткометражек
  function handleShortMoviesCheck() {
    setShortMoviesCheck(!shortMoviesCheck);
    if (shortMoviesCheck) {
      setFilteredMoviesList(queryMovies);
    } else {
      setFilteredMoviesList(sortShortMovies(queryMovies));
    }
    localStorage.setItem(`${currentUser.email} - shortMovies`, !shortMoviesCheck);
  }

  // Проверка состояния чекбокса в хранилище
  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true') {
      setShortMoviesCheck(true);
    } else {
      setShortMoviesCheck(false);
    }
  }, [currentUser]);

  // Отображение фильмов из хранилища
  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const moviesList = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movies`)
      );
      setQueryMovies(moviesList);
      if (
        localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true'
      ) {
        setFilteredMoviesList(sortShortMovies(moviesList));
      } else {
        setFilteredMoviesList(moviesList);
      }
    }
  }, [currentUser]);

  return (
    <main className="movies">
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        handleShortMoviesCheck={handleShortMoviesCheck}
        shortMoviesCheck={shortMoviesCheck}
      />
      {!NotFound && (
        <MoviesCardList
          moviesList={filteredMoviesList}
          addedMoviesList={addedMoviesList}
          onAddClick={onAddClick}
          onRemoveClick={onRemoveClick}
        />
      )}
    </main>
  );
}


export default Movies;
