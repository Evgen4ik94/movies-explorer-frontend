import './AboutProject.css';

function AboutProject() {

  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__title" id="project">
          О проекте
        </h2>
        <ul className="project__list">

          <li className="project__item">
            <h3 className="project__item-heading">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="project__item-description">
              Составление плана, работа над бэкендом приложения, вёрстка интерфейса на JSX, добавление функциональности и финальные доработки.
            </p>
          </li>

          <li className="project__item">
            <h3 className="project__item-heading">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="project__item-description">
              У каждого этапа был мягкий и жёсткий дедлайны, которые нужно было соблюдать, чтобы успешно защитить дипломный проект.
            </p>
          </li>

        </ul>

        <div className="project__scheme">
          <div className="project__back">
            <span className="project__back-duration">1 неделя</span>
            <span className="project__scheme-caption">Back-end</span>
          </div>
          <div className="project__front">
            <span className="project__front-duration">4 недели</span>
            <span className="project__scheme-caption">Front-end</span>
          </div>
        </div>
      </div>
    </section>

  );
}

export default AboutProject;
