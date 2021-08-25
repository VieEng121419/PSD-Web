//STICKY HEADER
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});
//VARIABLES FILTERS
let sortBtn = document.querySelector('.filter__menu').children;
let sortItem = document.querySelector('.filter__item').children;
//FUNTIONS FILTER
for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function () {
        for (let j = 0; j < sortBtn.length; j++) {
            sortBtn[j].classList.remove('current');
        }
        this.classList.add('current');
        let targetData = this.getAttribute('data-target');
        for (let k = 0; k < sortItem.length; k++) {
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');
            if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}

// //VARIABLES VIDEO
var video = document.querySelector('.video');
var btn = document.getElementById('player-btn');
var btnClose = document.getElementById('close-btn');
var img = document.getElementById('img-play');
var imgClose = document.getElementById('img-close');
var middle = document.getElementById('banner__middle');
var bannervideo = document.getElementsByClassName('banner__video--container')[0];
function togglePlay() {
    btnClose.style.display = "block";
    if (video.paused) {
        btn.className = 'pause';
        img.style.display = 'none';
        bannervideo.classList.add('active');
        video.play();
    } else {
        btn.className = 'play'
        img.style.display = 'block';
        video.pause();
    }
}

btn.onclick = function () {
    togglePlay();
}
video.onclick = function () {
    togglePlay();
}
btnClose.onclick = function () {
    closeVideo();
}

function closeVideo() {
    bannervideo.classList.remove('active');
    img.style.display = 'block';
    btnClose.style.display = 'none';
    video.pause();
}
//TOGGLE MENU
const menuToggle = document.querySelector('.menu__toggle');
const nav = document.querySelector('.navigation');
menuToggle.addEventListener('click', toggleMenu);
function toggleMenu() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}
//HAMBURGER MENU
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuToggle.addEventListener('click',burgerMenu);
function burgerMenu(){
    console.log(menuOpen);
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
}

