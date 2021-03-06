import {switchBuildings} from '../dom/store-dom.mjs'

let stock = document.getElementById('cookiesStock');
let cookiesStock = stock.getElementsByTagName('span')[0];
const bigCookie = document.getElementById('bigCookie');

export const updateBakery = bakeryObject => {
    let bakery = document.getElementById('bakery');
    let bakeryName = bakery.getElementsByTagName('h2')[0];
    bakeryName.innerHTML = bakeryObject.name;

    cookiesStock.innerHTML = Math.floor(bakeryObject.cookies);

    let cookiesPerSecond = document.getElementById('cookiesPerSecond');
    let cookiesPerSecondNumber = cookiesPerSecond.getElementsByTagName('span')[0];

    cookiesPerSecondNumber.innerHTML = Math.round(bakeryObject.cookiesPerSecond * 10) / 10;
}

export const addCookies = bakeryObject => {
    bigCookie.addEventListener('click', event => {
    bakeryObject.bakeCookies(bakeryObject.cookiesPerClick);
    switchBuildings(bakeryObject);
    
    const sonsClick = document.querySelectorAll('.sonsBakeryClick');
    sonsClick[Math.floor(Math.random() * (7 - 1)) + 1].play();

    let cookiesPerClick = bigCookie.appendChild(document.createElement('div'));
    cookiesPerClick.classList.add('animBigCookie');
    cookiesPerClick.style.left = `${event.offsetX}px`;
    cookiesPerClick.style.top = `${event.offsetY}px`;
    cookiesPerClick.innerHTML = `+${bakeryObject.cookiesPerClick}`;

    cookiesPerClick.addEventListener('animationend', () => {
        bigCookie.removeChild(cookiesPerClick);
    });
    
    cookiesStock.innerHTML = Math.floor(bakeryObject.cookies);   
});
}

export const addCookiesPerSecond = (bakeryObject) => {
    function cookiesAutoProduction() {
        bakeryObject.cookies += bakeryObject.cookiesPerSecond;
        switchBuildings(bakeryObject);
        updateBakery(bakeryObject);
    } 
    window.setInterval(cookiesAutoProduction, 1000);
}

export const playAudioClick = () => {
    for (let i = 1; i < 8; i++) {
        let audio = document.createElement('audio');
        audio.id = `soundBakery${i}`;
        audio.className = 'sonsBakeryClick';
        audio.src = `assets/sounds/click${i}.mp3`;
        bigCookie.appendChild(audio);
    }
}
