import './MoviesCard.css';

import { convertMovieDuration } from '../../utils/utils.js';
import { useLocation } from 'react-router-dom';
import { PHRASES } from '../../utils/constants';

function MoviesCard({ movie, added, onAddClick, onRemoveClick }) {
  const location = useLocation();
  const {addfilm, delfilm} = PHRASES;
  // Добавление фильма в сохраненные
  function handleAddClick() {
    onAddClick(movie);
  }

  // Удаление фильма из сохраненных
  function handleRemoveClick() {
    onRemoveClick(movie);
  }

  return (
    <li className="movies-card">
      <article className="movies-card__item">
        
        <div className="movies-card__description">
          <div className='movies-card__header'>
            <h2 className="movies-card__title">{movie.nameRU}</h2>
            <span className="movies-card__time">{convertMovieDuration(movie.duration)}</span>
          </div>
          {location.pathname === '/movies' && (
            <button 
              type="button" 
              className={`movies-card__btn movies-card__btn_type_${!added ? 'add' : 'added'}`} 
              aria-label = {`${added ? delfilm : addfilm}`}
              title = {`${added ? delfilm : addfilm}`}
              onClick={added ? handleRemoveClick : handleAddClick}>
            </button>
          )}
          
          {location.pathname === "/saved-movies" && (
            <button 
              type="button" 
              className="movies-card__btn movies-card__btn_type_remove"
              aria-label={delfilm}
              title={delfilm}
              onClick={handleRemoveClick}
              >
              
            </button>
          )}
        </div>
        <a target="_blank" rel="noreferrer" href={movie.trailerLink}>
          <img 
            src={movie.image}
            alt={movie.nameRU}
            title={`Описание: ${movie.description} \n\nСнято: ${movie.country} ${movie.year}г.`}
            className="movies-card__pic" />
        </a>
      </article>
    </li>
  )
}

export default MoviesCard;
