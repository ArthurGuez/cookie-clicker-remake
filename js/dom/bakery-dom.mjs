import Bakery from '../classes/bakery.mjs';

export const updateBakery = (element) => {
    let bakery = document.getElementById('bakery');
    let bakeryName = bakery.getElementsByTagName('h2')[0];
    bakeryName.innerHTML = element.name;

    let stock = document.getElementById('cookiesStock');
    let cookiesNumber = stock.getElementsByTagName('span')[0];
    cookiesNumber.innerHTML = element.cookies;


    let cookiesPerSecond = document.getElementById('cookiesPerSecond');
    let cookiesPerSecondNumber = cookiesPerSecond.getElementsByTagName('span')[0];
    cookiesPerSecondNumber.innerHTML = element.cookiesPerClick;
}






