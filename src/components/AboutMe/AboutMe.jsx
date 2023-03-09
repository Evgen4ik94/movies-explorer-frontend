import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

export default function AboutMe() {
  return (
    <section className="about-me" id="student">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__bio-container">
          <div className="about-me__bio">
            <h3 className="about-me__name">Евгений</h3>
            <p className="about-me__age">Фронтенд-разработчик, 28 лет</p>
            <p className="about-me__text">
              Я родился в Нижнем Новгороде, на данный момент живу в Казани, закончил
              электроэнергетический факультет НГТУ им. Р.Е. Алексеева. Увлекаюсь
              чтением, электротехникой, веб разработкой, самообразованием, спортом, люблю слушать музыку. 
              В 2022-2023 г. проходил курс "Веб-разработчик" от Яндекс.Практикум. 
              С 2022 года работаю в компании
              «Данафлекс», налаживаю работу упаковочного оборудования. После прохождения
              курса по веб-разработке ещё больше увлекся темой разработки и стремлюсь получить новый опыт и проекты в портфолио.
            </p>
            <ul className="about-me__socials">
              <li>
                <a
                  href="https://vk.com/miliakov"
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  ВКонтакте
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Evgen4ik94"
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img
            className="about-me__avatar"
            src={avatar}
            alt="фото разработчика"
          />
        </div>
      </div>
    </section>
  );
}
