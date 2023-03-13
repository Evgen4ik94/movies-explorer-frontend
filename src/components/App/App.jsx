import './App.css';
import moviesData from '../../utils/movies';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import AddedMovies from '../Movies/Movies.jsx';
import Profile from '../Profile/Profile.jsx';
import Footer from '../Footer/Footer.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';

export default function App() {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [addedMovies, setAddedMovies] = useState([]);
  const history = useHistory();

  function onClickBurgerMenu(isBurgerMenuOpened) {
    setIsBurgerMenuOpened(!isBurgerMenuOpened);
  };

  function comeBack() {
    history.goBack();
  };

  useEffect(() => {
    setMoviesList(moviesData);
  }, []);

  useEffect(() => {
    setAddedMovies(moviesData.filter((movie) => {
      return movie.saved
    }))
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header authorized={false} onClickBurgerMenu={onClickBurgerMenu} isBurgerMenuOpened={isBurgerMenuOpened} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header authorized={true} onClickBurgerMenu={onClickBurgerMenu} isBurgerMenuOpened={isBurgerMenuOpened} />
          <Movies moviesList={moviesList} />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header authorized={true} onClickBurgerMenu={onClickBurgerMenu} isBurgerMenuOpened={isBurgerMenuOpened} />
          <AddedMovies moviesList={addedMovies}/>
          <Footer />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Header authorized={true} onClickBurgerMenu={onClickBurgerMenu} isBurgerMenuOpened={isBurgerMenuOpened} />
          <Profile />
        </Route>
        <Route path="*">
          <NotFound goBack={comeBack} />
        </Route>
      </Switch>
    </div>
  )
}
