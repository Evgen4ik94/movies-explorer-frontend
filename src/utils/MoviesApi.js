import { BEATFILM_URL } from './constants';

class MoviesApi {
  constructor({ apiUrl }) {
    this._apiUrl = apiUrl;
  }

  // Проверяем запрос
  async _getResponseData(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(res);
  }

  // Получение списка фильмов
  getMoviesData() {
    return fetch(`${this._apiUrl}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => this._getResponseData(res));
  }
}

const moviesApi = new MoviesApi({
    apiUrl: BEATFILM_URL,
});

export default moviesApi;
