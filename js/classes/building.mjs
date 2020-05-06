export default class Building{
    constructor(building) {
        const {name,description,number,cookiesPerSecond,cost} = building;
        this._name = name;
        this._description = description;
        this._number = number || 0;
        this._cookiesPerSecond = cookiesPerSecond;
        this._cost = cost;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get number() {
        return this._number;
    }

    set number(newNumber) {
        this._number = newNumber;
    }

    get cookiesPerSecond() {
        return this._cookiesPerSecond;
    }

    get cost() {
        return this._cost;
    }

    set cost(newCost) {
        this._cost = newCost;
    }

    buy() {
        this._number++;
        this._cost = Math.ceil(this._cost * 1.15);
    }
}
