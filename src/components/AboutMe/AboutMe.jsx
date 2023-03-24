import './AboutMe.css';

import { SOCIALS, INFO } from '../../utils/constants';
import photo from '../../images/avatar.jpg';

const {vk, gh, cw} = SOCIALS;
const {name, about, text} = INFO

function AboutMe() {
  return (
    <section className="student" id="student">
      <div className="student__container">
        <h2 className="student__title">Студент</h2>
        <div className="student__info-container">
          <div className="student__info">

            <h3 className="student__name">{name}</h3>
            <p className="student__age">{about}</p>
            <p className="student__text">
              {text}
            </p>
            <ul className="student__socials">
              <li>
                <a href={vk} className="student__social_link" target="_blank" rel="noreferrer">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href={gh} className="student__social_link" target="_blank" rel="noreferrer">
                  Github
                </a>
              </li>
              <li>
                <a href={cw} className="student__social_link" target="_blank" rel="noreferrer">
                  Codewars
                </a>
              </li>
            </ul>

          </div>
          <img
            className="student__photo"
            src={photo}
            alt="Фото студента"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;