'use strict';
// window.addEventListener('load'); //когда загрузится вся страница

//когда загрузится структура страницы
window.addEventListener('DOMContentLoaded', function() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    // скрыть все tabContent начиная с индекса "a"
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }   
    
    //скрыть все tabContent, начиная со второго
    hideTabContent(1);

    //Отобразить определённый tabContent с индексом "b"
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //обработка клика, скрытие всех tabContent и отображение одного tabContent согласно even
    info.addEventListener('click', function(even) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}); 

