import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__block">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project_item">
            <a
              href="https://github.com/Evgen4ik94/how-to-learn"
              target="_blank"
              rel="noreferrer"
              className="portfolio__project_link"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__project_item">
            <a
              href="https://github.com/Evgen4ik94/russian-travel"
              target="_blank"
              rel="noreferrer"
              className="portfolio__project_link"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__project_item">
            <a
              href="https://github.com/Evgen4ik94/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
              className="portfolio__project_link"
            >
              Одностраничное веб-приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;