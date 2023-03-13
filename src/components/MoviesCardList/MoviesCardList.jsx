import './MoviesCardList.css';

import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList({ moviesList }) {
  const location = useLocation();

  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);

  //Ф-я изменения ширины экрана девайса
  const handleResizeScreenWidth = useCallback(() => {
    setScreenWidth(document.documentElement.clientWidth);
  }, [setScreenWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResizeScreenWidth);
  }, [handleResizeScreenWidth]);

  return (
    <>
      <ul className="movies-list">
          {screenWidth > 917 &&
            moviesList
              .slice(0, 12)
              .map((card) => <MoviesCard key={card._id} card={card} />)}
          {screenWidth >= 584 && screenWidth < 918 &&
            moviesList
              .slice(0, 8)
              .map((card) => <MoviesCard key={card._id} card={card} />)}
          {screenWidth < 584 &&
            moviesList
              .slice(0, 5)
              .map((card) => <MoviesCard key={card._id} card={card} />)}
      </ul>
      {location.pathname === "/movies" && (
        <button className="movies-list__show-more">Ещё</button>
      )}    
    </>
  )
}

export default MoviesCardList;