window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.matches('.tabheader__item')) {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
        
    });

    //Timer

    const deadline = '2021-02-01';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - new Date(),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor(t / (1000 * 60) % 60),
              seconds = Math.floor(t / 1000 % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return ('0' + num);
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('.modal__close');

    modalTrigger.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });
    
    

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';

    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
        
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Menu cards

    class MenuCard {
        constructor(imgsrc, imgalt, title, descr, price, parentSelector, ...classes) {
            this.imgsrc = imgsrc;
            this.imgalt = imgalt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 75;
            this.changeToRUB();
        }

        changeToRUB() {
            this.price *= this.transfer;
        }

        render() {
            const newMenu = document.createElement('div');
            if (this.classes.length == 0) {
                newMenu.classList.add('menu__item');
            } else {
                this.classes.forEach(className => newMenu.classList.add(className));
            }

            
            // newMenu.classList.add('menu__item');
            newMenu.innerHTML = `
            <img src="${this.imgsrc}" alt="${this.imgalt}">
                <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total">
                        <span>${this.price}</span> руб/день
                    </div>
                </div>`;
            this.parent.append(newMenu);
        }

    }
    new MenuCard(
        'img/tabs/vegy.jpg', 
        'vegy', 
        'Меню "Фитнес"', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
        9, 
        '.menu__field > .container',
        'menu__item',
        'big'
    ).render();
    
    new MenuCard(
        'img/tabs/elite.jpg', 
        'elite', 
        'Меню “Премиум”', 
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
        21, 
        '.menu__field > .container',
        'menu__item'
    ).render();

    new MenuCard(
        'img/tabs/post.jpg', 
        'post', 
        'Меню "Постное"', 
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
        14, 
        '.menu__field > .container',
        'menu__item'
    ).render();

    // Forms

    const forms = document.querySelectorAll('form');    //Получили массив с html-формами

    const message = {              //Статусы запроса для вывода пользователю
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {                 //Назначаем всем формам слушателя 'сабмит'
        postData(item);
    });

    function postData(form) {                        //Назначаем слушателя 'сабмит'
        form.addEventListener('submit', (e) => {        //Назначаем слушателя 'сабмит'
            e.preventDefault();                         //убираем перезагрузку страницы

            const statusMessage = document.createElement('div');     //создаём показывалку статуса запроса
            statusMessage.classList.add('status');                   //просто для цсс
            statusMessage.textContent = message.loading;             //выводим статус
            form.append(statusMessage);                              //показываем

            const request = new XMLHttpRequest();                    //создаём экземпляр запроса
            request.open('POST', 'server.php');                      //собираем

            request.setRequestHeader('Content-type', 'application/json');  //заголовок не нужен (устанавливается автоматически), если xmlhttprequest + FormData
            
            const formData = new FormData(form);                     //экземпляр формдаты, собирает данные с html-формы

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);                                  //отправляем данные

            request.addEventListener('load', () => {                 //создаём слушатель, ждущий загрузки реквеста
                if (request.status === 200) {           
                    console.log(request.response);                   
                    statusMessage.textContent = message.success;     //меняем сообщение пользователю
                    form.reset();                                    //Сброс данных в полях формы
                    setTimeout(() => {                               //таймер для ремува сообщения
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;     //что-то не так
                }
            });
        });
    }
});