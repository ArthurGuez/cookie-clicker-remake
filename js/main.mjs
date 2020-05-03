import Bakery from "./classes/bakery.mjs";
import Building from "./classes/building.mjs";
import { updateBakery } from "./dom/bakery-dom.mjs";
import { createBuildings } from "./dom/store-dom.mjs";
import { addCookies } from "./dom/bakery-dom.mjs";
import { playAudioClick } from "./dom/bakery-dom.mjs";

const newBakery = new Bakery();

updateBakery(newBakery);
createBuildings();
playAudioClick();
addCookies(newBakery);