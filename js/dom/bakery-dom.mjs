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
}

const bigCookie = document.getElementById('bigCookie');

export const addCookies = (element) => {
    bigCookie.addEventListener('click', () => {
    element.bakeCookies(element.cookiesPerClick);

    let cookiesPerClick = bigCookie.appendChild(document.createElement('div'));
    cookiesPerClick.classList.add('animBigCookie');
    cookiesPerClick.innerHTML = `+${element.cookiesPerClick}`;
    cookiesPerClick.addEventListener('animationend',() => {
        bigCookie.removeChild(cookiesPerClick);
    });
    
    cookiesStock.innerHTML = element.cookies;   
});
}






