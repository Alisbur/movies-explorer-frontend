import React from 'react';
import './More.css';

function More(props) {
  return (
    <section className="more">
      <div className="more__content">
        <button type="button" className="more__add-button button-transparency" aria-label="Загрузить больше фильмов">Ещё</button>
      </div>
    </section>
  );
}

export default More;