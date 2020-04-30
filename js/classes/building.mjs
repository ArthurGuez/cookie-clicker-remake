export default class Building{
    constructor(name,description,number = 0,cookiesPerSecond,cost){
        this._name = name;
        this._description = description;
        this._number = number;
        this._cookiesPerSecond = cookiesPerSecond;
        this._cost = cost;
    }
}
