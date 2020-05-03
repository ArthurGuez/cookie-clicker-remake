let stock = document.getElementById('cookiesStock');
let cookiesStock = stock.getElementsByTagName('span')[0];

export const updateBakery = (element) => {
    let bakery = document.getElementById('bakery');
    let bakeryName = bakery.getElementsByTagName('h2')[0];
    bakeryName.innerHTML = element.name;

    cookiesStock.innerHTML = element.cookies;

    let cookiesPerSecond = document.getElementById('cookiesPerSecond');
    let cookiesPerSecondNumber = cookiesPerSecond.getElementsByTagName('span')[0];
    cookiesPerSecondNumber.innerHTML = element.cookiesPerSecond;

    console.log(element.cookies);
}

const bigCookie = document.getElementById('bigCookie');

export const playAudioClick = () => {
    for (let i = 1; i < 8; i++) {
        let audio = document.createElement('audio');
        audio.id = `sound${i}`;
        audio.className = 'sonsClick';
        audio.src = `assets/sounds/click${i}.mp3`;
        document.body.appendChild(audio);
    }
}

export const addCookies = (element) => {
    bigCookie.addEventListener('click', (event) => {
    element.bakeCookies(element.cookiesPerClick);
    const sonsClick = document.querySelectorAll('.sonsClick');
    sonsClick[Math.floor(Math.random() * (7-1))+1 ].play();

    let cookiesPerClick = bigCookie.appendChild(document.createElement('div'));
    cookiesPerClick.classList.add('animBigCookie');
    cookiesPerClick.style.left = `${event.offsetX}px`;
    cookiesPerClick.style.top = `${event.offsetY}px`;
    cookiesPerClick.innerHTML = `+${element.cookiesPerClick}`;

    cookiesPerClick.addEventListener('animationend',() => {
        bigCookie.removeChild(cookiesPerClick);
    });
    
    cookiesStock.innerHTML = element.cookies;   
});
}








