import './Page404.css';
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Page404(props) {
  const navigate = useNavigate();

  return (
    <section className="page404">
      <div className="page404__content">
        <h1 className="page404__title">404</h1>
        <h2 className="page404__subtitle">Страница не найдена</h2>
        <NavLink onClick= {()=>navigate(-1)} className="page404__link">Назад</NavLink>
      </div>
    </section>
  );
}

export default Page404;