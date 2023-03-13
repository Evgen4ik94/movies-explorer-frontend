import './Promo.css';
import React from 'react';

export default function Promo({children}) {
  return (
    <section className="promo">
      <div className="promo__block">
        <div className="promo__case">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.</h1>
          {children}
        </div>
      </div>
    </section>
  );
}