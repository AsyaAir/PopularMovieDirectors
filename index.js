const directors = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссёр, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    }
];

// Выбор элемента для отображения списка режиссёров
const directorsList = document.getElementById('directors-list');

// Создание массива лучших фильмов
const topFilmsList = [];

// Перебор каждого элемента массива directors и добавление информации на страницу
directors.forEach(director => {
    // Создание элементов для отображения информации о режиссёре
    const directorDiv = document.createElement('div');
    directorDiv.classList.add('director');

    const nameElement = document.createElement('h2');
    nameElement.textContent = director.name;

    const careerElement = document.createElement('p');
    careerElement.textContent = `Карьера: ${director.career}`;

    const filmsElement = document.createElement('a');
    filmsElement.href = director.films;
    filmsElement.textContent = 'Фильмография';
    filmsElement.target = '_blank'; // Открытие ссылки в новой вкладке

    const topFilmElement = document.createElement('p');
    topFilmElement.textContent = `Лучший фильм: ${director.top_rated_film}`;

    // Добавление элементов в div режиссёра
    directorDiv.appendChild(nameElement);
    directorDiv.appendChild(careerElement);
    directorDiv.appendChild(filmsElement);
    directorDiv.appendChild(topFilmElement);

    // Добавление div в основной список на странице
    directorsList.appendChild(directorDiv);

    // Добавление лучшего фильма в массив topFilmsList
    topFilmsList.push(director.top_rated_film);
});

// Вывод списка лучших фильмов на страницу
const topFilmsUl = document.getElementById('top-films-list');
topFilmsList.forEach(film => {
    const li = document.createElement('li');
    li.textContent = film;
    topFilmsUl.appendChild(li);
});