import './Hero.css';
import pic from '../../images/OCO.svg';

function Hero(props) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className='hero__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img src={pic} className='hero__pic' alt=""/>
      </div>
    </section>
  );
}

export default Hero;