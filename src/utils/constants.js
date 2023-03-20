const API_URL = 'https://api.movies-flow.nomoredomains.rocks';

const BEATFILM_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const SHORTFILM_DURATION = 40;

const PHRASES = {
  sayhi: 'Приветствуем!',
  greeting: 'Добро пожаловать!',
  update: 'Данные успешно обновлены!',
  goodbye: 'До свидания!',
  notfound: 'Фильмы по Вашему запросу не найдены :(',
  server_error: 'На сервере произошла ошибка. Подождите немного и попробуйте ещё раз.',
  addfilm: 'Добавить фильм в сохраненные',
  delfilm: 'Удалить фильм из сохранённых',
  search_error: 'Нужно ввести ключевое слово.',
}

const SOCIALS = {
  vk: 'https://vk.com/miliakov',
  gh: 'https://github.com/Evgen4ik94',
  cw: 'https://www.codewars.com/users/Evgen4ik94',
  yp: 'https://practicum.yandex.ru/',
}

const PROJECTS = {
  project1: 'https://github.com/Evgen4ik94/how-to-learn',
  project2: 'https://github.com/Evgen4ik94/russian-travel',
  project3: 'https://github.com/Evgen4ik94/react-mesto-api-full',
}

const INFO = {
  name: 'Евгений',
  about: 'Фронтенд-разработчик, 28 лет',
  text: `Я родился в Нижнем Новгороде, на данный момент живу в Казани, закончил
              электроэнергетический факультет НГТУ им. Р.Е. Алексеева. Увлекаюсь
              чтением, электротехникой, веб разработкой, самообразованием, спортом, люблю слушать музыку. 
              В 2022-2023 г. проходил курс "Веб-разработчик" от Яндекс.Практикум. 
              С 2022 года работаю в компании
              «Данафлекс», налаживаю работу упаковочного оборудования. После прохождения
              курса по веб-разработке ещё больше увлекся темой разработки и стремлюсь получить новый опыт и проекты в портфолио.`,
}

const TECHS = {
  stack1: 'HTML',
  stack2: 'CSS',
  stack3: 'JS',
  stack4: 'Git',
  stack5: 'React',
  stack6: 'Express.js',
  stack7: 'MongoDB',
}

const TECHS_TITLES = {
  html: 'HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.',
  css: 'CSS (от англ. Cascading Style Sheets «каскадные таблицы стилей») — формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML).',
  js: 'JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. ',
  git: 'Git (произносится «гит») — распределённая система управления версиями.',
  react: 'React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
  express: 'Express.js, или просто Express —  фреймворк web-приложений для Node.js, реализованный как свободное и открытое программное обеспечение под лицензией MIT.',
  mongo: 'MongoDB — документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных.',
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

export { 
  API_URL, 
  BEATFILM_URL, 
  SHORTFILM_DURATION, 
  PHRASES, 
  GADJETS_WIDTH, 
  SOCIALS, INFO, 
  PROJECTS, 
  TECHS,
  TECHS_TITLES 
};
