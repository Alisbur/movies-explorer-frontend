import './Tech.css';

function Tech() {
  return (
    <section className="tech">
      <div className="tech__content">
        <h2 className="tech__title">Технологии</h2>
        <h3 className="tech__text-title">7 технологий</h3>
        <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="tech__items">
          <li className="tech__item">HTML</li>
          <li className="tech__item">CSS</li>
          <li className="tech__item">JS</li>
          <li className="tech__item">React</li>
          <li className="tech__item">Git</li>
          <li className="tech__item">Express.js</li>
          <li className="tech__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Tech;