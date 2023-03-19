const API_URL = 'https://api.movies-flow.nomoredomains.rocks';

const BEATFILM_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const SHORTFILM_DURATION = 40;

const PHRASES = {
  greeting: 'Добро пожаловать',
  update: 'Данные успешно обновлены!',
  goodbye: 'До свидания!'
}

const GADJETS_WIDTH = {
    desktop: {
      width: 1000,
      cards: {
        total: 12,
        more: 3,
      },
    },

    tablet: {
      width: 600,
      cards: {
        total: 8,
        more: 2,
      },
    },

    mobile: {
      width: 583,
      cards: {
        total: 5,
        more: 2,
      },
    },
};

export { API_URL, BEATFILM_URL, SHORTFILM_DURATION, PHRASES, GADJETS_WIDTH };
