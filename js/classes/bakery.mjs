import Building from "../classes/building.mjs";
import { data } from "../data.mjs";

export default class Bakery {
    constructor(bakery) {
        this._name = bakery ? bakery._name : "Metal Zombie";
        this._cookies = bakery ? bakery._cookies : 0;
        this._cookiesPerClick = bakery ? bakery._cookiesPerClick : 1;
        this._cookiesPerSecond = bakery ? bakery._cookiesPerSecond : 0;
        if(bakery && bakery._buildings){
            this._buildings = bakery._buildings.map((building) => {
                const props = {
                   name: building._name,
                   description : building._description,
                   number: building._number,
                   cookiesPerSecond : building._cookiesPerSecond,
                   cost : building._cost
                }
                return new Building(props)
              })
        }else{
            this._buildings = data.map(building => new Building(building));
        }  
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