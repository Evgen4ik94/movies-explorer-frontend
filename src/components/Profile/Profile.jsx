import './Profile.css';

import { useEffect, useContext } from 'react';
import useValidationForm from '../../hooks/useValidationForm.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

function Profile({ handleEditProfile, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext); // Подключаем контекст

  const { values, errors, isValid, handleChangeForm, resetFormInputs } = useValidationForm();

  // Загрузка данных юзера
  useEffect(() => {
    if (currentUser) {
      resetFormInputs(currentUser, {}, true);
    }
  }, [currentUser, resetFormInputs]);

  //Ручной сабмит формы редактирования профиля
  function handleFormSubmit(evt) {
    evt.preventDefault();
    handleEditProfile(values);
  }

  const inputValidity = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  return (
    <main className="profile">
      <form 
        className="profile__form" 
        name="profile" 
        onSubmit={handleFormSubmit} 
        noValidate 
      >
        <h1 className="profile__greeting">{`Привет, ${currentUser.name || ''}!`}</h1>
        <div className="profile__input-list">
          <label className="profile__input">
            <span className="profile__input-text">Имя</span>

            <input
              name="name"
              type="text"
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              className={`profile__input-placeholder ${errors.name && 'profile__input_error'}`}
              onChange={handleChangeForm}
              value={values.name || ' '}
              minLength="2"
              maxLength="30"
              required
            />

            <span className="profile__input_error">{errors.name || ''}</span>
          </label>

          <label className="profile__input">
            <span className="profile__input-text">E-mail</span>

            <input
              name="email"
              type="email"
              className={`profile__input-placeholder ${errors.email && 'profile__input_error'}`}
              onChange={handleChangeForm}
              value={values.email || ' '}
              required
            />
               
            <span className="profile__input_error">{errors.email || ''}</span>
          </label>
        </div>

        <div className="profile__btn-block">
          <button
            type="submit"
            className={`profile__btn-edit ${!isValid && 'profile__btn-edit_disabled'}`}
            disabled={inputValidity ? true : false}
          >
            Редактировать
          </button>
          <button 
            type="button" 
            className="profile__btn-exit" 
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>

      </form>
    </main>
  )
}

export default Profile;