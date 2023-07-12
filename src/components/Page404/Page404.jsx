import './Page404.css';
import React from "react";
import { NavLink } from "react-router-dom";

function Page404(props) {

  return (
    <section className="page404">
      <div className="page404__content">
        <h1 className="page404__title">404</h1>
        <h2 className="page404__subtitle">Страница не найдена</h2>
        <NavLink to="#" className="page404__link">Назад</NavLink>
      </div>
    </section>
  );
}

export default Page404;