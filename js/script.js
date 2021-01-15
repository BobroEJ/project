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

const ads3 = document.querySelectorAll('.promo__adv > *'),
      genre = document.querySelector('.promo__genre'),
      bg = document.getElementsByClassName('promo__bg')[0],
      films = movieDB.movies.sort(),
      listOfFilms = document.createElement('ul'),
      title = document.getElementsByClassName('promo__interactive-title')[0],
      oldFilms = document.getElementsByClassName('promo__interactive-list'),
      input = document.querySelector('.adding__input'),
      btn = document.querySelector('button'),
      ch = document.querySelector('[type="checkbox"]');

//let dels = document.getElementsByClassName('delete');


//1) Удалить все рекламные блоки со страницы (три варианта)
ads3.forEach(item => {
    item.remove();
});

//2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.innerText = 'ДРАМА';

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
bg.style.backgroundImage = 'url(img/bg.jpg)';

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 

//-------------------------------------------------------------------------------------------

oldFilms[0].remove();
title.insertAdjacentElement('afterend', listOfFilms);

function listRendering() {
    listOfFilms.innerHTML = '';
    for (let i = 0; i < films.length; i++) {
        listOfFilms.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${films[i]}
                <div class="delete"></div>
            </li>
            <br>
            `;
    }
    addEvent();
}

listRendering();




btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value.length > 21) {
        films[films.length] = input.value[0].toUpperCase() + input.value.slice(1,22) + '...';
    } else if (input.value == '') {       
    } else {
        films[films.length] = input.value[0].toUpperCase() + input.value.slice(1);
    }
    
    if (ch.checked) {
        console.log('Добавляем любимый фильм');
    }

    films.sort();
    listRendering();
});


function addEvent() {
    let dels = document.getElementsByClassName('delete');
    for (let item of dels) {
        item.addEventListener('click', () => {
            //console.dir(item.parentElement.firstChild.textContent[0]);
            let position = item.parentElement.firstChild.textContent[0]-1;
            films.splice(position, 1);
            listRendering();
        });
    }
}



