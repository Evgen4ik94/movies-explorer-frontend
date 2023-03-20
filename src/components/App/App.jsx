import './App.css';

import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import { PHRASES } from '../../utils/constants';

import Header from '../Header/Header';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import usePressEsc from '../../hooks/usePressEsc.jsx';
import MainApi from '../../utils/MainApi.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import InfoTooltip from '../InfoTooltip/InfoTooltip.jsx';
import Preloader from '../Preloader/Preloader.jsx';


export default function App() {

  const [authorize, setAuthorize] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoaderOn, setIsLoaderOn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState({
    isOpen: false,
    successful: true,
    text: '',
  });

  const [currentUser, setCurrentUser] = useState({});
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [addedMoviesList, setAddedMoviesList] = useState([]);

  const headerEndpoints = ['/movies', '/saved-movies', '/profile', '/'];
  const footerEndpoints = ['/movies', '/saved-movies', '/'];

  const {greeting, update, goodbye} = PHRASES;

  const history = useHistory();
  const location = useLocation();

  /*------ USE EFFECTS ------*/
  // Проверка токена, авторизация
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const path = location.pathname;

    if (jwt) {
      setIsLoaderOn(true); //Вкл прелоадер

      MainApi
        .getUserData()
        .then(data => {
          if (data) {
            setAuthorize(true);
            setCurrentUser(data);
            history.push(path);
          }
        })
        .catch(err =>
          setIsInfoTooltipOpen({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => {
          setIsLoaderOn(false); //Выкл прелоадер после загрузки данных
          setLoading(true);
        });
    } else {
      setLoading(true);
    }
    // eslint-disable-next-line
  }, []);

  // Получение списка добавленных фильмов
  useEffect(() => {
    const path = location.pathname;
    if (authorize && currentUser) {
      MainApi
        .getAddedMoviesList()
        .then(data => {
          const userAddedMoviesList = data.filter(m => m.owner === currentUser._id);
          setAddedMoviesList(userAddedMoviesList);
          history.push(path);
        })
        .catch(err =>
          setIsInfoTooltipOpen({
            isOpen: true,
            successful: false,
            text: err,
          })
        );
    }
    // eslint-disable-next-line
  }, [currentUser, authorize]);


  // Получение информации о юзере
  useEffect(() => {
    if (authorize) {
      setIsLoaderOn(true);

      MainApi
        .getUserData()
        .then(res => setCurrentUser(res))
        .catch(err =>
            setIsInfoTooltipOpen({
              isOpen: true,
              successful: false,
              text: err,
            })
        )
        .finally(() =>
          setIsLoaderOn(false)
        );
    }
  }, [authorize]);

  /*------ USE EFFECTS END ------*/
  

  /*------ NOT FOUND ------*/
  // Переход назад со страницы с ошибкой 404
  function comeBack() {
    history.goBack();
  }
  /*------ NOT FOUND END------*/


  /*--- BURGER MENU and POPUP ---*/
  // Открытие бургерного меню
  function onClickBurgerMenu() {
    setIsBurgerMenuOpened(!isBurgerMenuOpened);
  };

  // Закрытие бургерного меню кликом на Esc
  usePressEsc(onClickBurgerMenu, isBurgerMenuOpened);

  function errorPopup(text) {
    setIsInfoTooltipOpen({
      isOpen: true,
      successful: false,
      text: text,
    })
  }

  function successPopup(text) {
    setIsInfoTooltipOpen({
      isOpen: true,
      successful: true,
      text: text,
    })
  }
  
  // Функция для закрытия попапа с информацией
  function handleClosePopup() {
    setIsInfoTooltipOpen({ ...isInfoTooltipOpen, isOpen: false });
  }

  // Автоматическое закрытие ранее открытого попапа по таймеру
  function popupAutoClose(text) {
    setTimeout(() => {
    setIsInfoTooltipOpen({ 
      isOpen: false,
      successful: true,
      text: text,
    })
    }, 2000);
  }
  
  /*--- BURGER MENU and POPUP END---*/


  /*------ FUNCTIONS ------*/
  // Функция авторизации через апи
  function handleUserAuth({ email, password }) {
    setIsLoaderOn(true); //Вкл прелоадер

    MainApi
      .login(email, password)
      .then(jwt => {
        if (jwt.token) {
          localStorage.setItem('jwt', jwt.token);
          setAuthorize(true);
          successPopup(greeting);
          popupAutoClose(greeting);
          history.push('/movies');
        }
      })
      .catch(err =>
        errorPopup(err)
      )
      .finally(() =>
        setIsLoaderOn(false) //Выкл прелоадер после загрузки данных
      );
  }

  // Функция регистрации через апи
  function handleUserReg({ name, email, password }) {
    setIsLoaderOn(true); //Вкл прелоадер

    MainApi
      .register(name, email, password)
      .then(data => {
        if (data._id) {
          handleUserAuth({ email, password });
        }
      })
      .catch(err =>
        errorPopup(err)
      )
      .finally(() =>
        setIsLoaderOn(false) //Выкл прелоадер после загрузки данных
      );
  }

  // Функция редактирования профиля
  function handleEditProfile({ name, email }) {
    setIsLoaderOn(true); //Вкл прелоадер

    MainApi
      .updateUserData(name, email)
      .then(newUserData => {
        setCurrentUser(newUserData);
        successPopup(update);
        popupAutoClose(update);
      })
      .catch(err =>
        errorPopup(err)
      )
      .finally(() =>
        setIsLoaderOn(false) //Выкл прелоадер после загрузки данных
      );
  }

  // Функция выхода из учетной записи
  function handleAccountExit() {
    setCurrentUser({});
    setAuthorize(false);
    localStorage.clear();
    successPopup(goodbye);
    popupAutoClose(goodbye);
    history.push('/');
  }

  // Функция добавления фильма в сохраненные
  function handleAddMovieCard(movieCard) {
    MainApi
      .addMovieCard(movieCard)
      .then(newMovieCard => setAddedMoviesList([newMovieCard, ...addedMoviesList]))
      .catch(err =>
        errorPopup(err)
      );
  }

  // Функция удаления фильма из списка сохраненных
  function handleRemoveMovieCard(movie) {
    const addedMovie = addedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    MainApi
      .removeMovieCard(addedMovie._id)
      .then(() => {
        const newMoviesList = addedMoviesList.filter(m => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setAddedMoviesList(newMoviesList);
      })
      .catch(err =>
        errorPopup(err)
      );
  }
  /*------ FUNCTIONS END------*/

  return (

    <div className="app">
      {!loading ? (
        <Preloader isOpen={isLoaderOn} />
          ) : (
                <CurrentUserContext.Provider value={currentUser}>
                  <Route exact path={headerEndpoints}>
                    <Header
                      authorize={authorize}
                      onClickBurgerMenu={onClickBurgerMenu}
                      isBurgerMenuOpened={isBurgerMenuOpened}
                    />
                  </Route>
                  <Switch>
                    <Route exact path='/'>
                      <Main />
                    </Route>
                    <Route exact path='/signup'>
                      {!authorize ? (
                        <Register handleUserReg={handleUserReg} />
                          ) : (
                                <Redirect to='/' />
                              )}
                    </Route>
                    <Route exact path='/signin'>
                      {!authorize ? (
                        <Login handleUserAuth={handleUserAuth} />
                          ) : (
                                <Redirect to='/' />
                              )}
                    </Route>
                    <ProtectedRoute
                      path='/movies'
                      component={Movies}
                      authorize={authorize}
                      setIsLoaderOn={setIsLoaderOn}
                      setIsInfoTooltipOpen={setIsInfoTooltipOpen}
                      addedMoviesList={addedMoviesList}
                      onAddClick={handleAddMovieCard}
                      onRemoveClick={handleRemoveMovieCard}
                    />
                    <ProtectedRoute
                      path='/saved-movies'
                      component={SavedMovies}
                      authorize={authorize}
                      setIsInfoTooltipOpen={setIsInfoTooltipOpen}
                      addedMoviesList={addedMoviesList}
                      onRemoveClick={handleRemoveMovieCard}
                    />
                    <ProtectedRoute
                      path='/profile'
                      component={Profile}
                      authorize={authorize}
                      handleEditProfile={handleEditProfile}
                      handleSignOut={handleAccountExit}
                    />
                    <Route path='*'>
                      <NotFound goBack={comeBack} />
                    </Route>
                  </Switch>
                  <Route exact path={footerEndpoints}>
                    <Footer />
                  </Route>
                  <Preloader isOpen={isLoaderOn} />
                  <InfoTooltip status={isInfoTooltipOpen} onClose={handleClosePopup} />
                </CurrentUserContext.Provider>
              )
      }
    </div>
  )
}
