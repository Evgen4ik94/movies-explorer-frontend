import './Profile.css';

import { useEffect } from 'react';
import useValidationForm from '../../hooks/useValidationForm.jsx';

function Profile() {
  const { values, errors, isValid, handleChangeForm, resetForm } = useValidationForm();

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    resetForm();
  }, [resetForm])

  return (
    <main className="profile">
      <form className="profile__form" name="profile" noValidate onSubmit={handleFormSubmit}>
        <h1 className="profile__greeting">Привет, Евгений!</h1>
        <div className="profile__input-list">
          <label className="profile__input">
            <span className="profile__input-text">Имя</span>
            <input
              name="name"
              className={`profile__input-placeholder ${errors.name && 'profile__input_error'}`}
              onChange={handleChangeForm}
              value={values.name || 'Евгений'}
              type="text"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="profile__input_error-name">{errors.name || ''}</span>
          </label>
          <label className="profile__input">
            <span className="profile__input-text">E-mail</span>
            <input
              name="email"
              className={`profile__input-placeholder ${errors.email && 'profile__input_error'}`}
              onChange={handleChangeForm}
              value={values.email || 'evgenymilyakov@yandex.ru'}
              type="email"
              required
            />
            <span className="profile__input_error">{errors.email || ''}</span>
          </label>
        </div>
        <div className="profile__btn-block">
          <button
            type="submit"
            className={`profile__btn-edit ${!isValid && 'profile__btn-edit_disabled'}`}
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button type="submit" className="profile__btn-exit">
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </main>
  )
}

export default Profile;