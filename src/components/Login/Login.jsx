import './Login.css';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PHRASES } from '../../utils/constants';
import HeaderLogo from '../../images/header_logo.svg';
import useValidationForm from '../../hooks/useValidationForm.jsx';

function Login({ handleUserAuth }) {
  const { values, handleChangeForm, resetFormInputs, errors, isValid } = useValidationForm();
  const {sayhi} = PHRASES;
  //Ручной сабмит формы
  function handleFormSubmit(evt) {
    evt.preventDefault(values);
    handleUserAuth(values);
  }
  // Сброс полей формы
  useEffect(() => {
    resetFormInputs();
  }, [resetFormInputs]);

  return (

    <main className="login">
      <form className="login__form" name="login" onSubmit={handleFormSubmit} noValidate>
        <Link to="/" className="login__link_block">
          <img src={HeaderLogo} alt="Логотип" className="login__link_logo" />
        </Link>
        <h1 className="login__greeting">{sayhi}</h1>
        <div className="login__input-list">
          <label className="login__input">
            <span className="login__input-text">E-mail</span>
            <input
              name="email"
              type="email"
              className={`login__input-placeholder ${errors.email && 'login__input_error'}`}
              onChange={handleChangeForm}
              value={values.email || ''}
              required
            />
            <span className="login__input-error">{errors.email || ''}</span>
          </label>
          <label className="login__input">
            <span className="login__input-text">Пароль</span>
            <input
              name="password"
              type="password"
              className={`login__input-placeholder ${errors.password && 'login__input_error'}`}
              onChange={handleChangeForm}
              value={values.password || ''}
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

export default Login;