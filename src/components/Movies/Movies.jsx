import './Movies.css';

import { useState, useContext, useEffect } from 'react';
import {convertMovie, filterMoviesList, sortShortMovies} from '../../utils/utils.js';
import { PHRASES } from '../../utils/constants';

import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import moviesApi from '../../utils/MoviesApi.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

function Movies({setIsLoaderOn, errorPopup, addedMoviesList,onRemoveClick, onAddClick}) {
  
  const currentUser = useContext(CurrentUserContext); // Подключаем контекст

  const [isAllMoviesList, setIsAllMoviesList] = useState([]); // Список всех фильмов на сервере
  const [queryMovies, setQueryMovies] = useState([]); // Список фильмов по запросу

  const [shortMoviesCheck, setShortMoviesCheck] = useState(false); // Стейт чекбокса короткометражек
  const [filteredMoviesList, setFilteredMoviesList] = useState([]); // Фильмы, отображаемые по запросу и отфильтрованные чекбоксом

  const [NotFound, setNotFound] = useState(false); // Если фильмы по запросу не найдены, стейт в состоянии true
  const {notfound, server_error} = PHRASES;
  
  /*----- ХУКИ ---*/
  // Проверка состояния чекбокса в хранилище
  useEffect(() => {
    (localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true') ? setShortMoviesCheck(true) : setShortMoviesCheck(false)
  }, [currentUser]);

  // Отображение фильмов из хранилища
  useEffect(() => {
      if (localStorage.getItem(`${currentUser.email} - movies`)) {
        const moviesList = JSON.parse(localStorage.getItem(`${currentUser.email} - movies`)
      );

      setQueryMovies(moviesList);

      if (localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true') 
        {
          setFilteredMoviesList(sortShortMovies(moviesList));
        } 
      else 
        {
          setFilteredMoviesList(moviesList);
        }
    }
  }, [currentUser]);

  /*----- ХУКИ END ---*/

  /*----- ФУНКЦИИ -----*/
  // Поиск фильмов по базе
  function handleSetMoviesList(moviesList, userQuery, shortMoviesCheckbox) {
    const movies = filterMoviesList(moviesList, userQuery, shortMoviesCheckbox);

    if (movies.length === 0) {
      errorPopup(notfound);
      setNotFound(true);
    } 
    else {
      setNotFound(false);
    }

    setQueryMovies(movies);
    setFilteredMoviesList(!shortMoviesCheckbox ? movies : sortShortMovies(movies));
    localStorage.setItem(`${currentUser.email} - movies`, JSON.stringify(movies));
  }

  // Поиск фильмов по запросу
  function handleSearchFormSubmit(inputValue) {
    localStorage.setItem(`${currentUser.email} - shortMovies`, shortMoviesCheck);
    localStorage.setItem(`${currentUser.email} - movieSearch`, inputValue);

    if (isAllMoviesList.length === 0) {
        setIsLoaderOn(true); //Вкл прелоадер
        // Запрашиваем список фильмов из апи
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
            errorPopup(server_error)
          )
          .finally(() => setIsLoaderOn(false)); //Выкл прелоадер
        } 
        else {
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
  /*----- ФУНКЦИИ END-----*/

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
