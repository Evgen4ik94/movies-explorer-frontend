import "./Techs.css";

import { TECHS, TECHS_TITLES } from "../../utils/constants";

function Techs() {
  
  const {stack1, stack2, stack3, stack4, stack5, stack6, stack7} = TECHS;
  const {html, css, js, git, react, express, mongo} = TECHS_TITLES;

  return (
    <section className="techs" id="techs">
      <div className="techs__block">
        <h2 className="techs__heading">Технологии</h2>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">

          <li className="techs__list_elem">
            <p className="techs__list_elem-name" title={html}>{stack1}</p>
          </li>

          <li className="techs__list_elem">
            <p className="techs__list_elem-name" title={css}>{stack2}</p>
          </li>

          <li className="techs__list_elem">
            <p className="techs__list_elem-name" title={js}>{stack3}</p>
          </li>

          <li className="techs__list_elem">
            <p className="techs__list_elem-name" title={git}>{stack4}</p>
          </li>

          <li className="techs__list_elem">
            <p className="techs__list_elem-name" title={react}>{stack5}</p>
          </li>

          <li className="techs__list_elem">
            <p className="techs__list_elem-name" title={express}>{stack6}</p>
          </li>

          <li className="techs__list_elem">
            <p className="techs__list_elem-name" title={mongo}>{stack7}</p>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default Techs;