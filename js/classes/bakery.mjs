import Building from "../classes/building.mjs";
import { data } from "../data.mjs";

export default class Bakery {
    constructor(name = "Metal Zombie", cookies = 14, buildings, cookiesPerClick, cookiesPerSecond) {
        this._name = name;
        this._cookies = cookies;
        this._buildings = data.map(building => {
            return new Building(building);
        });
        this._cookiesPerClick = 1;
        this._cookiesPerSecond = 0;
    }

    get name() {
        return this._name;
    }

    get cookies() {
        return this._cookies;
    }

    set cookies(newStock) {
        this._cookies = newStock;
    }

    get buildings() {
        return this._buildings;
    }

    get cookiesPerClick() {
        return this._cookiesPerClick;
    }

    get cookiesPerSecond() {
        return this._cookiesPerSecond;
    }

    bakeCookies(howMany) {
        this._cookies += howMany;
    }
    
    buyBuilding(which) {
        const buildingObject = this._buildings.find(element => element.name === which);
        buildingObject.buy()
        this._cookiesPerSecond += buildingObject.cookiesPerSecond;
    }
}