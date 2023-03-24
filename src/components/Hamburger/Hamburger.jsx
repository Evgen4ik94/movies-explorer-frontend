import './Hamburger.css';

import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function Hamburger({isBurgerMenuOpened, onClickBurgerMenu}) {

  // Контроль правильности отображения меню
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

  const handleonClickBurgerMenu = () => {
    onClickBurgerMenu();
  }

  // Закрытие бургерного меню автоматически при изменении ширины экрана
  useEffect(() => {
    if (!isMobile && isBurgerMenuOpened) {
      onClickBurgerMenu();
    }
  }, [isMobile, isBurgerMenuOpened, onClickBurgerMenu]);



  return (
    <button
      type="button"
      className={`hamburger-btn hamburger-btn_${isBurgerMenuOpened ? 'on': 'off'}`}
      onClick={handleonClickBurgerMenu}
    >
      <span></span>
    </button>
  )
}

export default Hamburger;
