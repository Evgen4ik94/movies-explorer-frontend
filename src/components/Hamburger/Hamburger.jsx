import './Hamburger.css';

import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function Hamburger({isBurgerMenuOpened, onClickBurgerMenu}) {

  // Контроль правильности отображения меню
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

  const handleonClickBurgerMenu = () => {
    onClickBurgerMenu();
  }

  useEffect(() => {
    if (!isMobile && isBurgerMenuOpened) {
      onClickBurgerMenu();
    }
  }, [isMobile, isBurgerMenuOpened, onClickBurgerMenu]);

 

  return (
    <button type="button" className={`hamburger-button hamburger-button_${isBurgerMenuOpened ? 'on': 'off'}`} onClick={handleonClickBurgerMenu}>
      <span></span>
    </button>
  )
}

export default Hamburger;