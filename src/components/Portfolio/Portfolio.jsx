import './Portfolio.css';

import { PROJECTS } from '../../utils/constants';

const { project1, project2, project3} = PROJECTS;

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__block">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project_item">
            <a
              href={project1}
              className="portfolio__project_link"
              target="_blank"
              rel="noreferrer"
            >
              <p className='portfolio__project_title'>Статичный сайт</p>
              <span className='portfolio__project_arrow'>↗</span>
            </a>
            
          </li>
          <li className="portfolio__project_item">
            <a
              href={project2}
              className="portfolio__project_link"
              target="_blank"
              rel="noreferrer"
            >
              <p className='portfolio__project_title'>Адаптивный сайт</p>
              <span className='portfolio__project_arrow'>↗</span>
            </a>
          </li>
          <li className="portfolio__project_item">
            <a
              href={project3}
              className="portfolio__project_link"
              target="_blank"
              rel="noreferrer"
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