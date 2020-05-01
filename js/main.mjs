import Bakery from "./classes/bakery.mjs";
import Building from "./classes/building.mjs";
import {updateBakery} from "./dom/bakery-dom.mjs";
import {createBuildings} from "./dom/store-dom.mjs";

const newBakery = new Bakery();

updateBakery(newBakery);
createBuildings();
