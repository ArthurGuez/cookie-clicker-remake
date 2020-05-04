import Building from "../classes/building.mjs";
import { buildings } from "../data.mjs";

export default class Bakery {
    constructor(name = "Metal Zombie", cookies = 15, buildings, cookiesPerClick, cookiesPerSecond) {
        this._name = name;
        this._cookies = cookies;
        this._buildings = buildings.map(building => {
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

    get buildings() {
        return this.buildings;
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

    
    // buyBuilding(which) {
    //     const building = this._buildings.find(element => {
    //         element.name === which);
    //     }
    //     building.buy()
    // }
}