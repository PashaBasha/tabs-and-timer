window.addEventListener('DOMContentLoaded', function () {

    'use strict';




    let tab = document.querySelectorAll('.info-header-tab')
    let info = document.querySelector('.info-header')
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show')
            tabContent[i].classList.add('hide')
        }
    }

    hideTabContent(1)

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0)
                    showTabContent(i)
                    break;
                }
            }
        }


    })

    //timer
    let deadline = '2021-03-02'
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000 % 60))
        let minutes = Math.floor((t / 1000 / 60) % 60)
        let hourse = Math.floor((t / 1000 * 60 % 60))


        return {
            'total': t,
            'hours': hourse,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours + 'ч';
            minutes.textContent = t.minutes + 'м';
            seconds.textContent = t.seconds + 'с';
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock('timer', deadline);


});








