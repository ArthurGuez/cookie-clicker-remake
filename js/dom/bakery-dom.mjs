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

    cookiesStock.innerHTML = element.cookies;   
});
}






