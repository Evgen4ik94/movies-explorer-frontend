import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import logo from '../../images/header_logo.svg';

function Header({ authorized, onClickBurger, isBurgerOpened }) {
  return (
    <div className='header__container'>
      <header className={`header`}>
        <Link to="/" className="header__link">
          <img className='header__logo' src={logo} alt="Логотип" />
        </Link>
        <Navigation authorized={authorized} onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened} />
      </header>
    </div>
  );
}

export default Header;
