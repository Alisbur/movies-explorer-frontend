import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">О проекте</h2>
        <article className='about__desc-grid'>
          <h3 className='about__parts-title'>Дипломный проект включал 5 этапов</h3>
          <h3 className='about__time-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__parts-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className='about__time-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
        <ul className="about__schedule-grid">
          <li className="about__back-time">1 неделя</li>
          <li className="about__front-time">4 недели</li>
          <li className="about__back-caption">Back-end</li>
          <li className="about__front-caption">Front-end</li>
        </ul>
      </div>
    </section>
  );
}

export default About;