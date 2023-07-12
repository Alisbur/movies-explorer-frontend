import './Promo.css';
import pic from '../../images/OCO.svg';

function Promo(props) {
  return (
    <section className="promo" aria-label="Заглавный слайд проектной работы">
      <div className="promo__content">
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img src={pic} className='promo__pic' alt=""/>
      </div>
    </section>
  );
}

export default Promo;