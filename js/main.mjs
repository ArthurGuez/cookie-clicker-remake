import Bakery from "./classes/bakery.mjs";
import { updateBakery } from "./dom/bakery-dom.mjs";
import { createBuildings } from "./dom/store-dom.mjs";
import { addCookies } from "./dom/bakery-dom.mjs";
import { playAudioClick } from "./dom/bakery-dom.mjs";
import { playAudioBuy } from "./dom/store-dom.mjs";
import { buyBuildings } from "./dom/store-dom.mjs";
import { addCookiesPerSecond } from "./dom/bakery-dom.mjs";

// const newBakery = new Bakery();

//     updateBakery(newBakery);
//     createBuildings();
//     playAudioClick();
//     playAudioBuy();
//     addCookies(newBakery);
//     buyBuildings(newBakery);
//     addCookiesPerSecond(newBakery);

const getSavedBakery = localStorage.getItem('savedBakery');

if(getSavedBakery === null){
    const newBakery = new Bakery();

    updateBakery(newBakery);
    createBuildings(newBakery);
    playAudioClick();
    playAudioBuy();
    addCookies(newBakery);
    buyBuildings(newBakery);
    addCookiesPerSecond(newBakery);

    window.setInterval(saveBakery, 30000, newBakery)
}else{
    const jsBakery = JSON.parse(getSavedBakery);
    const savedBakery = new Bakery(jsBakery);
    updateBakery(savedBakery);
    createBuildings(savedBakery);
    playAudioClick();
    playAudioBuy();
    addCookies(savedBakery);
    buyBuildings(savedBakery);
    addCookiesPerSecond(savedBakery);

    window.setInterval(saveBakery, 30000, savedBakery);
}

function saveBakery (bakeryObject) {
    localStorage.setItem('savedBakery',JSON.stringify(bakeryObject));
    console.log('Saved ! ')
}
