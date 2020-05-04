import Bakery from "./classes/bakery.mjs";
import Building from "./classes/building.mjs";
import { updateBakery } from "./dom/bakery-dom.mjs";
import { createBuildings } from "./dom/store-dom.mjs";
import { addCookies } from "./dom/bakery-dom.mjs";
import { playAudioClick } from "./dom/bakery-dom.mjs";
import { buyBuildings } from "./dom/store-dom.mjs";

const newBakery = new Bakery();
const newBuilding = new Building();

updateBakery(newBakery);
createBuildings();
playAudioClick();
addCookies(newBakery);
buyBuildings(newBuilding);