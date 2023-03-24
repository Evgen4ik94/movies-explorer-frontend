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
    <li className="movie-card">
      <article className="movie-card__item">
        
        <div className="movie-card__description" title={`\n Режиссёр: ${movie.director},\n ${movie.country}, ${movie.year}г.`}>
          <div className='movie-card__header'>
            <h2 className="movie-card__title">{movie.nameRU}</h2>
            <span className="movie-card__time">{convertMovieDuration(movie.duration)}</span>
          </div>

          {location.pathname === '/movies' && (
            <button 
              type="button" 
              className={`movie-card__btn movie-card__btn_type_${!added ? 'add' : 'added'}`} 
              aria-label = {`${added ? delfilm : addfilm}`}
              title = {`${added ? delfilm : addfilm}`}
              onClick={added ? handleRemoveClick : handleAddClick}>
            </button>
          )}
          
          {location.pathname === "/saved-movies" && (
            <button 
              type="button" 
              className="movie-card__btn movie-card__btn_type_remove"
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
            title={`Описание: ${movie.description}`}
            className="movie-card__pic" />
        </a>
      </article>
    </li>
  )
}

export default MoviesCard;
