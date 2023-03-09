import './Promo.css';
import React from 'react';

export default function Promo({children}) {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__about-project">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.</h1>
          {children}
        </div>
      </div>
    </section>
  );
}