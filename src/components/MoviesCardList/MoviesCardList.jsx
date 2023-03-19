import './MoviesCardList.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GADJETS_WIDTH } from '../../utils/constants.js';
import { getAddedMoviesCards } from '../../utils/utils.js';

import useWidthScreen from '../../hooks/useWidthScreen.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList({ moviesList, addedMoviesList, onAddClick, onRemoveClick }) {
  const location = useLocation();

  const widthScreen = useWidthScreen();

  const { desktop, tablet, mobile } = GADJETS_WIDTH;

  const [isMounted, setIsMounted] = useState(true);
  const [renderMoviesList, setRenderMoviesList] = useState([]);
  const [showedCards, setShowedCards] = useState({ total: 12, more: 3 });


  // Эффект для контроля количества отображаемых фильмов при разной ширине экрана
  useEffect(() => {
    if (location.pathname === '/movies') {
      if (widthScreen <= desktop.width && widthScreen > mobile.width) {
        setShowedCards(tablet.cards);
      }
        else if (widthScreen > desktop.width) {
        setShowedCards(desktop.cards);
      }
        else {
        setShowedCards(mobile.cards);
      }
      return () => setIsMounted(false);
    }
  }, [widthScreen, isMounted, desktop, tablet, mobile, location.pathname]);

  // Изменение количества фильмов по ширине экрана
  useEffect(() => {
    if (moviesList.length) {
      const res = moviesList.filter((item, i) => i < showedCards.total);
      setRenderMoviesList(res);
    }
  }, [moviesList, showedCards.total]);

  // увеличение кол-ва отображаемых фильмов по клику на кнопку "Ещё"
  function handleClickShowMore() {
    const start = renderMoviesList.length;
    const end = start + showedCards.more;
    const added = moviesList.length - start;

    if (added > 0) {
      const moreCards = moviesList.slice(start, end);
      setRenderMoviesList([...renderMoviesList, ...moreCards]);
    }
  }

  return (
    <>
      <ul className="movies-list">
          { renderMoviesList.map(movie => (
            <MoviesCard
              key={movie.id || movie._id}
              added={getAddedMoviesCards(addedMoviesList, movie)}
              onAddClick={onAddClick}
              onRemoveClick={onRemoveClick}
              movie={movie}
            />
            ))
          }
      </ul>
      {location.pathname === "/movies" && (
        <button type='button' className="movies-list__show-more" onClick={handleClickShowMore}>Ещё</button>
      )}
    </>
  )
}

export default MoviesCardList;
