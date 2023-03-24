import './Header.css';

import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import HeaderLogo from '../../images/header_logo.svg';

function Header({ authorize, onClickBurgerMenu, isBurgerMenuOpened }) {
  return (
      <header className={`header`}>
        <Link to="/" className="header__link">
          <img className='header__logo' src={HeaderLogo} alt="Лого" />
        </Link>
        <Navigation authorize={authorize} onClickBurgerMenu={onClickBurgerMenu} isBurgerMenuOpened={isBurgerMenuOpened} />
      </header>
  );
}

export default Header;
