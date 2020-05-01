export default class Bakery{
    constructor(name = "Metal Zombie",cookies,buildings,cookiesPerClick,cookiesPerSecond){
        this._name = name;
        this._cookies = 0;
        this._buildings = [];
        this._cookiesPerClick = 1;
        this._cookiesPerSecond = 0;
    }

    get name(){
        return this._name;
    }

    get cookies(){
        return this._cookies;
    }

    get buildings(){
        return this.buildings;
    }

    get cookiesPerClick(){
        return this._cookiesPerClick;
    }

    get cookiesPerSecond(){
        return this._cookiesPerSecond;
    }

    bakeCookies(howMany){
        this._cookies += howMany;
    }
}