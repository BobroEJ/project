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

    class MenuCards {
        constructor(imgsrc, imgalt, title, descr, price) {
            this.imgsrc = imgsrc;
            this.imgalt = imgalt;
            this.title = title;
            this.descr = descr;
            this.price = price;
        }

        createMenu() {
            const menuContainer = 
                document.querySelector('.menu__field > .container'),
                  newMenu = document.createElement('div');
            newMenu.classList.add('menu__item');
            newMenu.innerHTML = `<img src="${this.imgsrc}" alt="${this.imgalt}">
            <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
            menuContainer.append(newMenu);
        }

    }
    // const nm = new MenuCards('img/tabs/vegy.jpg', 'new menu', 'Новое', 'asfadfbabvwavarcv aca afd!', 999);
    // nm.createMenu();

});