/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Лала лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1) Удалить все рекламные блоки со страницы (три варианта)
//const ads1 = document.getElementsByClassName('promo__adv');
//ads1[0].remove();
//const ads2 = document.querySelector('.promo__adv');
//ads2.remove();
const ads3 = document.querySelectorAll('.promo__adv > *');
ads3.forEach(item => {
    item.remove();
});

//2) Изменить жанр фильма, поменять "комедия" на "драма"
const genre = document.querySelector('.promo__genre');
//genre.innerText = 'ДРАМА';
genre.textContent = 'ДРАМА';

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
const bg = document.getElementsByClassName('promo__bg')[0];
//bg.style.background = 'url(img/bg.jpg)';
bg.style.backgroundImage = 'url(img/bg.jpg)';

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
//4.1
// const oldListOfFilms = 
//     document.getElementsByClassName('promo__interactive-item');
//const films = movieDB.movies.sort();
// for (let i = 0; i < films.length; i++) {
//     oldListOfFilms[i].innerHTML = `${films[i]}<div class="delete"></div>`;
//}
//4.2
const films = movieDB.movies.sort();
const listOfFilms = document.createElement('ul');
const title = document.getElementsByClassName('promo__interactive-title')[0];
title.classList.add('promo__interactive-list');
const oldFilms = document.getElementsByClassName('promo__interactive-list');
oldFilms[0].remove();
title.insertAdjacentElement('afterend', listOfFilms);
for (let i = 0; i < films.length; i++) {
    listOfFilms.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1}. ${films[i]}
            <div class="delete"></div>
        </li>
        <br>`;
}



// const promoTitle = document.querySelector('.promo__interactive-title');

//const oldListOfFilms = document.getElementsByClassName('promo__interactive-list')[0];

//promoTitle.insertAdjacentElement('afterend');
// oldListOfFilms.remove();
//oldListOfFilms.replaceWith(listOfFilms);

// movieDB.forEach(item => {
//     let listOfFilms.createElement('li').innerText = item;
// });