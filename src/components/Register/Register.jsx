import './Register.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import HeaderLogo from '../../images/header_logo.svg';
import useValidationForm from '../../hooks/useValidationForm.jsx';

function Register({ handleRegister }) {
  const { values, errors, isValid, handleChangeForm, resetFormInputs } = useValidationForm();

  //Ручной сабмит формы
  function handleFormSubmit(evt) {
    evt.preventDefault();
    handleRegister(values);
  }

  useEffect(() => {
    resetFormInputs();
  }, [resetFormInputs]);

  return (

    <main className="register">
      <form
        className="register__form"
        name="register"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <Link to="/" className="register__link_logo">
          <img src={HeaderLogo} alt="Логотип" className="register__logo" />
        </Link>
        <h1 className="register__greeting">Добро пожаловать!</h1>
        <div className="register__input-list">
          <label className="register__input">
            <span className="register__input-text">Имя</span>
            <input
              name="name"
              type="text"
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              className={`register__input-placeholder ${errors.name && 'register__input_error'}`}
              value={values.name || ''}
              onChange={handleChangeForm}
              minLength="2"
              maxLength="30"
              required
            />
            <span className="register__error-text">{errors.name || ''}</span>
          </label>
          <label className="register__input">
            <span className="register__input-text">E-mail</span>

            <input
              name="email"
              type="email"
              className={`register__input-placeholder ${errors.email && 'register__input_error'}`}
              value={values.email || ''}
              onChange={handleChangeForm}
              required
            />

            <span className="register__error-text">{errors.email || ''}</span>
          </label>
          <label className="register__input">
            <span className="register__input-text">Пароль</span>

            <input
              name="password"
              type="password"
              className={`register__input-placeholder ${errors.password && 'register__input_error'}`}
              onChange={handleChangeForm}
              value={values.password || ''}
              minLength="6"
              required
            />

            <span className="register__error-text">{errors.password || ''}</span>
          </label>
        </div>

        <button
          type="submit"
          className={`register__btn_submit ${!isValid && 'register__btn_submit_disabled'}`}
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>

        <span className="register__help">
          Уже зарегистрированы?&nbsp;
          <Link to="signin" className="register__link">
            Войти
          </Link>
        </span>
      </form>
    </main>
  )
}

export default Register;
