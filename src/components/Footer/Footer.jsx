import './Footer.css';

import { SOCIALS } from '../../utils/constants';

const {vk, gh, yp} = SOCIALS;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__nav">
          <p className="footer__copyright">&copy;{new Date().getFullYear()}</p>
          <ul className="footer__links">
            <li>
              <a href={yp} target="_blank" rel="noreferrer" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href={gh} target="_blank" rel="noreferrer" className="footer__link">
                Github
              </a>
            </li>
            <li>
              <a href={vk} target="_blank" rel="noreferrer" className="footer__link">
                ВКонтакте
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;