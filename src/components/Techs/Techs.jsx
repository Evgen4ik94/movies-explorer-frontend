import "./Techs.css";

function Techs() {
  
  return (
    <section className="techs" id="techs">
      <div className="techs__block">
        <h2 className="techs__heading">Технологии</h2>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__stack-list">

          <li className="techs__stack-elem">
            <p className="techs__stack-name">HTML</p>
          </li>

          <li className="techs__stack-elem">
            <p className="techs__stack-name">CSS</p>
          </li>

          <li className="techs__stack-elem">
            <p className="techs__stack-name">JS</p>
          </li>

          <li className="techs__stack-elem">
            <p className="techs__stack-name">Git</p>
          </li>

          <li className="techs__stack-elem">
            <p className="techs__stack-name">React</p>
          </li>

          <li className="techs__stack-elem">
            <p className="techs__stack-name">Express.js</p>
          </li>

          <li className="techs__stack-elem">
            <p className="techs__stack-name">mongoDB</p>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default Techs;