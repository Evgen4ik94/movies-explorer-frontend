import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__block">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project_item">
            <a
              className="portfolio__project_link"
              href="https://github.com/Evgen4ik94/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              <p className='portfolio__project_title'>Статичный сайт</p>
              <span className='portfolio__project_arrow'>↗</span>
            </a>
            
          </li>
          <li className="portfolio__project_item">
            <a
              href="https://github.com/Evgen4ik94/russian-travel"
              target="_blank"
              rel="noreferrer"
              className="portfolio__project_link"
            >
              <p className='portfolio__project_title'>Адаптивный сайт</p>
              <span className='portfolio__project_arrow'>↗</span>
            </a>
          </li>
          <li className="portfolio__project_item">
            <a
              href="https://github.com/Evgen4ik94/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
              className="portfolio__project_link"
            >
              <p className='portfolio__project_title'>Одностраничное веб-приложение</p>
              <span className='portfolio__project_arrow'>↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;