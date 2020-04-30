import Bakery from '../classes/bakery.mjs';

export const updateBakery = (element) => {
    let bakery = document.getElementById('bakery');
    let bakeryName = bakery.getElementsByTagName('h2')[0];
    console.log(bakeryName);
    bakeryName.innerHTML = element.name;

    
}






