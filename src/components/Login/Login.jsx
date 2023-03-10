import './Login.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../images/header_logo.svg';
import useValidationForm from '../../hooks/useValidationForm.jsx';

export default function Login() {
  const { values, handleChangeForm, resetForm, errors, isValid } = useValidationForm();

  //Ручной сабмит формы
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  // Сброс полей формы
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="login">
      <form className="login__form" name="login" noValidate onSubmit={handleFormSubmit}>
        <Link to="/" className="login__link">
          <img src={HeaderLogo} alt="Логотип" className="login__logo" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <div className="login__input-list">
          <label className="login__input">
            <span className="login__input-text">E-mail</span>
            <input
              name="email"
              className={`login__input-placeholder ${errors.email && 'login__input_error'}`}
              onChange={handleChangeForm}
              value={values.email || ''}
              type="email"
              required
            />
            <span className="login__input-error">{errors.email || ''}</span>
          </label>
          <label className="login__input">
            <span className="login__input-text">Пароль</span>
            <input
              name="password"
              className={`login__input-placeholder ${errors.password && 'login__input_error'}`}
              onChange={handleChangeForm}
              value={values.password || ''}
              type="password"
              required
            />
            <span className="login__input-error">{errors.password || ''}</span>
          </label>
        </div>
        <button
          type="submit"
          className={`login__btn_submit ${ !isValid && 'login__btn_submit_disabled' }`}
          disabled={!isValid}
        >
          Войти
        </button>
        <span className="login__help">
          Ещё не зарегистрированы?&nbsp;
          <Link to="signup" className="login__link">
            Регистрация
          </Link>
        </span>
      </form>
    </main>
  )
}
