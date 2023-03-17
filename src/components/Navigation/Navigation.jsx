import './Navigation.css';

import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger.jsx';

function Navigation({ authorize, isBurgerMenuOpened, onClickBurgerMenu }) {
  const activeLink = `navigation__link_active_${!isBurgerMenuOpened ? 'desktop' : 'mobile'}`

  function handleCloseByOverlay(evt) {
    console.log('Done!')
    evt.stopPropagation();
  }

  return (
    <>
      {!authorize ? (
        <nav className="navigation">
              <Link to="/signup" className="navigation__link_landing">
                Регистрация
              </Link>
              <Link to="/signin" className="navigation__link_landing">
                Войти
              </Link>
        </nav>
      ) : (
        <nav className={`navigation navigation_state_${!isBurgerMenuOpened ? 'closed' : 'opened'}`}>
          <ul 
            className={
              `navigation__list navigation__list_logged navigation__list_state_${!isBurgerMenuOpened ? 'closed' : 'opened'}`
            } 
            onClick={handleCloseByOverlay}>

              {isBurgerMenuOpened && (
                <li className="navigation__item navigation__item_main">
                  <NavLink exact to="/" className="navigation__link" activeClassName={activeLink}>
                    Главная
                  </NavLink>
                </li>
              )}
              <div className='navigation__movies'>
                <li className="navigation__item">
                  <NavLink to="/movies" className="navigation__link" activeClassName={activeLink}>
                    Фильмы
                  </NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink to="/saved-movies" className="navigation__link" activeClassName={activeLink}>
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </div>
                <li className="navigation__item">
                  <NavLink to="/profile" className="navigation__account" activeClassName={activeLink}>
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