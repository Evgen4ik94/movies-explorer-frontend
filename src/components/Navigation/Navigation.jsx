import './Navigation.css';

import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger.jsx';

function Navigation({ authorize, isBurgerMenuOpened, onClickBurgerMenu }) {
  const activeClassName = `navigation__link_active_${!isBurgerMenuOpened ? 'desktop' : 'mobile'}`

  // Закрытие бургерного меню кликом на оверлей (Всплытие)
  function handleCloseByOverlay(evt) {
    evt.stopPropagation();
  }

  return (
    <>
      {!authorize ? (
        <nav className="navigation">
              <ul className="navigation__list navigation__list_landing">
                <li className="navigation__list_item">
                  <Link 
                    to="/signup" 
                    className="navigation__link navigation__link_landing"
                  >
                    Регистрация
                  </Link>
                </li>
                <li className="navigation__list_item">
                  <Link 
                    to="/signin" 
                    className="navigation__link navigation__link_landing"
                  >
                    Войти
                  </Link>
                </li>
              </ul>
        </nav>
      ) : (
        <nav 
          className={`navigation navigation_status_${!isBurgerMenuOpened ? 'closed' : 'opened'}`} 
          onClick={isBurgerMenuOpened ? onClickBurgerMenu : undefined}
        >
          <ul
            className={ `navigation__list navigation__list_auth navigation__list_status_${!isBurgerMenuOpened ? 'closed' : 'opened'}` }
            onClick={handleCloseByOverlay}
          >
              {isBurgerMenuOpened && (
                <li className="navigation__list_item navigation__list_item_main">
                  <NavLink 
                    exact to="/" 
                    className="navigation__link" 
                    activeClassName={activeClassName}
                  >
                    Главная
                  </NavLink>
                </li>
              )}
              <div className='navigation__movies'>
                <li className="navigation__list_item">
                  <NavLink 
                    to="/movies" 
                    className="navigation__link" 
                    activeClassName={activeClassName}
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="navigation__list_item">
                  <NavLink 
                    to="/saved-movies" 
                    className="navigation__link" 
                    activeClassName={activeClassName}
                  >
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </div>
                <li className="navigation__list_item">
                  <NavLink 
                    to="/profile" 
                    className="navigation__account" 
                    activeClassName={activeClassName}
                  >
                    Аккаунт
                  </NavLink>
                </li>
          </ul>
          <Hamburger isBurgerMenuOpened={isBurgerMenuOpened} onClickBurgerMenu={onClickBurgerMenu} />
        </nav>
      )}
    </>
  );
}

export default Navigation;
