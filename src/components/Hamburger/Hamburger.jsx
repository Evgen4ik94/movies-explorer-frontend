import './Hamburger.css';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

export default function Hamburger({isBurgerMenuOpened, onClickBurgerMenu}) {

  // контроль ширины экрана, для правильной логики работы классов и отображения меню
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

  const handleonClickBurgerMenu = () => {
    onClickBurgerMenu(isBurgerMenuOpened);
  }

  useEffect(() => {
    if (!isMobile) {
      onClickBurgerMenu(true);
    }
  }, [isMobile, onClickBurgerMenu]);

  return (
    <button type="button" className={`hamburger-button hamburger-button_${isBurgerMenuOpened ? 'on': 'off'}`} onClick={handleonClickBurgerMenu}>
      <span></span>
    </button>
  )
}
