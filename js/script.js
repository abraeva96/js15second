// birinchi strelkaga ulanamiz 

const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

function clock() {
    // new Date() - Global Object Kompyuterdan hozirgi vaqtni oladi
    // getSeconds() - Komputerdagi vaqatdan sekundni olib beradi
    // getMinutes() - Komputerdagi vaqatdan minutni olib beradi
    // getHours() - Komputerdagi vaqatdan soatni olib beradi
    // console.log(new Date().getHours());
    let time = new Date(),
        second = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours()

    sec.style.transform = `rotate(${second * 6}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`

    setTimeout(() => clock(), 1000);

    hourNum.innerHTML = hours < 10 ? '0' + hours : hours
    minNum.innerHTML = minutes < 10 ? '0' + minutes : minutes

}
clock()

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');


for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', (e) => {
        // e  -elemnent haqida barcha malumotni beradi


        e.preventDefault()


        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove('active')
            tabs[j].classList.remove('active')
        }
        tabs[i].classList.add('active')
        links[i].classList.add('active')
    })
}



// Second


const stopHour = document.querySelector('.stopwatch__hours'),
    stopMin = document.querySelector('.stopwatch__minutes'),
    stopSec = document.querySelector('.stopwatch__seconds'),
    stopbtn = document.querySelector('.stopwatch__btn'),
    int = document.querySelector('.tabsLink__span');




stopbtn.addEventListener('click', () => {
    if (stopbtn.innerHTML == 'start') {
        stopbtn.innerHTML = 'stop';
        int.classList.add('active')
    } else if (stopbtn.innerHTML == 'stop') {
        stopbtn.innerHTML = 'clear';
        int.classList.remove('active');
        int.classList.add('active_clear');
    } else if (stopbtn.innerHTML == 'clear') {
        stopbtn.innerHTML = 'start'
        stopSec.innerHTML = 0;
        stopMin.innerHTML = 0;
        stopHour.innerHTML = 0;
        int.classList.remove('active_clear')
    }
})

function second() {

    if (stopbtn.innerHTML == 'stop') {
        stopSec.innerHTML++;
    }
    if (stopSec.innerHTML >= 60) {
        stopSec.innerHTML = 0;
        stopMin.innerHTML++;

    }
    if (stopSec.innerHTML >= 60) {
        stopMin.innerHTML = 0;
        stopHour.innerHTML++;

    }
    if (stopbtn.innerHTML == 'start') {
        stopHour.innerHTML = 0;
        stopMin.innerHTML = 0;
        stopSec.innerHTML = 0;
    }

    setTimeout(() => second(), 1000);


}
second()