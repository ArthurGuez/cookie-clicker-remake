import {buildings} from '../../js/data.mjs';

export const createBuildings = () => {
    let buildingsLength = buildings.length;
    let buildingsHtml = document.getElementById('buildings');
    for(let i = 0 ; i < buildingsLength ; i++){
        let divBuilding = document.createElement('div');
        divBuilding.id = `building-${buildings[i].name.toLowerCase()}`;
        divBuilding.className = "locked disabled";
        buildingsHtml.appendChild(divBuilding);

        let divIcon = document.createElement('div');
        divIcon.className = 'icon';
        let divName = document.createElement('div');
        divName.className = 'name';
        let divCost = document.createElement('div');
        divCost.className = 'cost';
        let divNumber = document.createElement('div');
        divNumber.className = 'number';

        divBuilding.appendChild(divIcon);
        divBuilding.appendChild(divName);
        divBuilding.appendChild(divCost);
        divBuilding.appendChild(divNumber);

        divName.innerHTML = buildings[i].name;
        divCost.innerHTML = buildings[i].cost;
    }
}