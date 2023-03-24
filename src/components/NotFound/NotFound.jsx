import "./NotFound.css";


function NotFound({ goBack }) {

  return (
    <main className="not-found">
      <p className="not-found__block">
        <span className="not-found__error">404</span>
        <span className="not-found__error-text">Страница не найдена</span>
      </p>
      <button type="button" className="not-found__btn" onClick={goBack}>
        Назад
      </button>
    </main>
  )

}

export default NotFound;