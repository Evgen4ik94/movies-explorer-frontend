import './AboutMe.css';
import photo from '../../images/avatar.jpg';

export default function AboutMe() {
  return (
    <section className="student" id="student">
      <div className="student__container">
        <h2 className="student__title">Студент</h2>
        <div className="student__bio-container">
          <div className="student__bio">
            <h3 className="student__name">Евгений</h3>
            <p className="student__age">Фронтенд-разработчик, 28 лет</p>
            <p className="student__text">
              Я родился в Нижнем Новгороде, на данный момент живу в Казани, закончил
              электроэнергетический факультет НГТУ им. Р.Е. Алексеева. Увлекаюсь
              чтением, электротехникой, веб разработкой, самообразованием, спортом, люблю слушать музыку. 
              В 2022-2023 г. проходил курс "Веб-разработчик" от Яндекс.Практикум. 
              С 2022 года работаю в компании
              «Данафлекс», налаживаю работу упаковочного оборудования. После прохождения
              курса по веб-разработке ещё больше увлекся темой разработки и стремлюсь получить новый опыт и проекты в портфолио.
            </p>
            <ul className="student__socials">
              <li>
                <a href="https://vk.com/miliakov" target="_blank" rel="noreferrer" className="student__social-link">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="https://github.com/Evgen4ik94" target="_blank" rel="noreferrer" className="student__social-link">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.codewars.com/users/Evgen4ik94" target="_blank" rel="noreferrer" className="student__social-link">
                  Codewars
                </a>
              </li>
            </ul>
          </div>
          <img
            className="student__avatar"
            src={photo}
            alt="фото студента"
          />
        </div>
      </div>
    </section>
  );
}
