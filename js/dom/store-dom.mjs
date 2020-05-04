import {buildings} from '../../js/data.mjs';

let buildingsLength = buildings.length;
let buildingsHtml = document.getElementById('buildings');

export const createBuildings = () => {
    for (let i = 0 ; i < buildingsLength ; i++) {
        let divBuilding = document.createElement('div');
        divBuilding.id = `building-${buildings[i].name.toLowerCase()}`;
        divBuilding.className = "locked disabled";
        buildingsHtml.appendChild(divBuilding);

        let divIcon = document.createElement('div');
        divIcon.className = 'icon';
        let divBox = document.createElement('div');
        divBox.className = 'box';
        let divName = document.createElement('div');
        divName.className = 'name';
        let divCost = document.createElement('div');
        divCost.className = 'cost';
        let divNumber = document.createElement('div');
        divNumber.className = 'number';

        divBuilding.appendChild(divIcon);
        divBuilding.appendChild(divBox);
        divBox.appendChild(divName);
        divBox.appendChild(divCost);
        divBuilding.appendChild(divNumber);

        divName.innerHTML = buildings[i].name;
        divCost.innerHTML = buildings[i].cost;
    }
}

export const switchBuildings = bakeryObject => {
    for (let i = 0; i < buildingsLength; i++) {
        if (bakeryObject.cookies >= buildings[i].cost) { 
            let divBuilding = document.getElementById(`building-${buildings[i].name.toLowerCase()}`);
            
            divBuilding.classList.remove("locked");
            divBuilding.classList.add("unlocked");
            divBuilding.classList.remove("disabled");
            divBuilding.classList.add("enabled");
        }   
    }
}   

export const buyBuildings = buildingObject => {
    let divBuilding = buildingsHtml.childNodes;
    divBuilding.forEach(building => building.addEventListener('click', () => {
        let divCost = building.childNodes[1].childNodes[1]; 
        let divNumber = building.childNodes[2];

        buildingObject.cost = divCost.innerHTML;
        buildingObject.number = divNumber.innerHTML
        buildingObject.buy(); 
        divCost.innerHTML = buildingObject.cost;
        divNumber.innerHTML = buildingObject.number;

        const sonsBuy = document.querySelectorAll('.sonsStoreClick');
        sonsBuy[Math.floor(Math.random() * (4-1))+1 ].play();
    }));
}

export const playAudioBuy = () => {
    for (let i = 1; i < 5; i++) {
        let audio = document.createElement('audio');

        audio.id = `soundStore${i}`;
        audio.className = 'sonsStoreClick';
        audio.src = `assets/sounds/buy${i}.mp3`;
        buildingsHtml.appendChild(audio);
    }
}
    
