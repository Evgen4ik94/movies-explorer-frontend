import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger.jsx';

export default function Navigation({ authorized, isBurgerOpened, onClickBurger }) {

  const activeLink = `navigation__link_active_${isBurgerOpened ? 'mobile' : 'desktop'}`

  return (
    <>
      {!authorized ? (
        <nav className="navigation">
              <Link to="/signup" className="navigation__link_landing">
                Регистрация
              </Link>
              <Link to="/signin" className="navigation__link_landing">
                Войти
              </Link>
        </nav>
      ) : (
        <nav className={`navigation navigation_state_${isBurgerOpened ? 'opened' : 'closed'}`}>
          <ul className={`navigation__list navigation__list_logged navigation__list_state_${isBurgerOpened ? 'opened' : 'closed'}`}>
            {isBurgerOpened && (
                <NavLink exact to="/" className="navigation__link" activeClassName={activeLink}>
                  Главная
                </NavLink>
            )}
            <div className='navigation__movies'>
                <NavLink to="/movies" className="navigation__link" activeClassName={activeLink}>
                  Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className="navigation__link" activeClassName={activeLink}>
                  Сохранённые фильмы
                </NavLink>
            </div>
              <NavLink to="/profile" className="navigation__account" activeClassName={activeLink}>
                Аккаунт
              </NavLink>
          </ul>
          <Hamburger isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger} />
        </nav>
      )}
    </>
  );
}
