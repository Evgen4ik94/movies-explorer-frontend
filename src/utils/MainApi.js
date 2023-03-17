import { API_URL } from './constants.js';

// Создаем класс для взаимодействия с бэкендом
class Api {
  constructor({ apiUrl }) {
    this._apiUrl = apiUrl;
  }

  // Проверяем запрос
  async _getResponseData(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(result.message);
  }

  // Авторизация пользователя
  login(email, password) {
    return fetch(`${this._apiUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(res => this._getResponseData(res));
  }

  // Регистрация нового пользователя
  register(name, email, password) {
    return fetch(`${this._apiUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(res => this._getResponseData(res));
  }

  // Получение данных пользователя
  getUserData() {
    return fetch(`${this._apiUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(res => this._getResponseData(res));
  }

  // Изменение данных пользователя
  updateUserData(name, email) {
    return fetch(`${this._apiUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    }).then(res => this._getResponseData(res));
  }

  // Добавление фильма в список сохраненных
  addMovieCard(data) {
    return fetch(`${this._apiUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(res => this._getResponseData(res));
  }

  // Удаление фильма из списка сохраненных
  removeMovieCard(data) {
    return fetch(`${this._apiUrl}/movies/${data}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(res => this._getResponseData(res));
  }

  // Получение списка сохраненных фильмов
  getAddedMoviesList() {
    return fetch(`${this._apiUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(res => this._getResponseData(res));
  }

  
}

// Экземпляр класса
const MainApi = new Api({
  apiUrl: API_URL,
});

export default MainApi;
