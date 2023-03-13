import './MoviesCard.css';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card }) {
  const [isCardAdded, setIsCardAdded] = useState(card.saved); // Стейт состояния карточки
  const location = useLocation();

  const handleAddClick = () => {
    setIsCardAdded(!isCardAdded);
  };

  return (
    <li className="movies-card">
      <article className="movies-card__item">
        
        <div className="movies-card__description">
          <div className='movies-card__header'>
            <h2 className="movies-card__title">{card.title}</h2>
            <span className="movies-card__duration">{card.duration}</span>
          </div>
          {location.pathname === '/movies' && (
            <button type="button" className={`movies-card__btn movies-card__btn_type_${!isCardAdded ? 'add' : 'added'}`} onClick={handleAddClick}></button>
          )}
          {location.pathname === "/saved-movies" && (
            <button type="button" className="movies-card__btn movies-card__btn_type_remove"></button>
          )}
        </div>
        <img src={card.poster} className="movies-card__poster" alt={card.title} />
      </article>
    </li>
  )
}

export default MoviesCard;
