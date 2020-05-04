import Bakery from "./classes/bakery.mjs";
import { updateBakery } from "./dom/bakery-dom.mjs";
import { createBuildings } from "./dom/store-dom.mjs";
import { addCookies } from "./dom/bakery-dom.mjs";
import { playAudioClick } from "./dom/bakery-dom.mjs";
import { playAudioBuy } from "./dom/store-dom.mjs";
import { buyBuildings } from "./dom/store-dom.mjs";

const newBakery = new Bakery();

updateBakery(newBakery);
createBuildings();
playAudioClick();
playAudioBuy();
addCookies(newBakery);
buyBuildings(newBakery);


