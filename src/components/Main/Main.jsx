import './Main.css';

import Promo from '../Promo/Promo.jsx'
import NavTab from '../NavTab/NavTab';
import AboutMe from '../AboutMe/AboutMe.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';

function Main() {
  return (
    <main className="main">
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}


export default Main;