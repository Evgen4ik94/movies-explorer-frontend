import './Header.css';

import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import HeaderLogo from '../../images/header_logo.svg';

function Header({ authorized, onClickBurgerMenu, isBurgerMenuOpened }) {
  return (
      <header className={`header`}>
        <Link to="/" className="header__link">
          <img className='header__logo' src={HeaderLogo} alt="Логотип" />
        </Link>
        <Navigation authorized={authorized} onClickBurgerMenu={onClickBurgerMenu} isBurgerMenuOpened={isBurgerMenuOpened} />
      </header>
  );
}

export default Header;
