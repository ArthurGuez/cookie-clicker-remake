import { data } from '../../js/data.mjs';
import { updateBakery } from '../dom/bakery-dom.mjs'; 
import { createBackground} from '../dom/production-dom.mjs';

let dataLength = data.length;
let buildingsHtml = document.getElementById('buildings');

export const createBuildings = () => {
    for (let i = 0 ; i < dataLength ; i++) {
        let divBuilding = document.createElement('div');
        
        divBuilding.id = `building-${data[i].name.toLowerCase()}`;
        divBuilding.className = "locked disabled";

        if (i > 1) {
            divBuilding.style.display = "none";
        }

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

        divName.innerHTML = data[i].name;
        divCost.innerHTML = data[i].cost;
    }
}

export const switchBuildings = bakeryObject => {
    for (let i = 0; i < dataLength; i++) {
        let divBuilding = document.getElementById(`building-${data[i].name.toLowerCase()}`);

        if (bakeryObject.cookies >= bakeryObject.buildings[i].cost) { 
            divBuilding.classList.remove("locked");
            divBuilding.classList.add("unlocked");
            divBuilding.classList.remove("disabled");
            divBuilding.classList.add("enabled");

            if (divBuilding.classList.contains("unlocked")) {
                document.getElementById(`building-${data[i+2].name.toLowerCase()}`).style.display = "";
            }
        } else {
            divBuilding.classList.remove("enabled");
            divBuilding.classList.add("disabled");
        }

        if(bakeryObject.buildings[i]){
            let divCost = divBuilding.childNodes[1].childNodes[1]; 
            let divNumber = divBuilding.childNodes[2];
            divCost.innerHTML = bakeryObject.buildings[i].cost;
            divNumber.innerHTML = bakeryObject.buildings[i].number;
        }
    }
}   

export const buyBuildings = bakeryObject => {
    let divBuilding = buildingsHtml.childNodes;

    divBuilding.forEach(building => building.addEventListener('click', () => {
        
        let divName = building.childNodes[1].childNodes[0];
        let divCost = building.childNodes[1].childNodes[1]; 
        let divNumber = building.childNodes[2];

        for (let i = 0 ; i < dataLength ; i++) {
            if (bakeryObject.cookies < bakeryObject.buildings[i].cost) {
                building.classList.remove("enabled");
                building.classList.add("disabled");
                } else {
                    if (bakeryObject.buildings[i].name === divName.innerHTML) {
                        bakeryObject.cookies -= bakeryObject.buildings[i].cost;
        
                        bakeryObject.buyBuilding(divName.innerHTML);
        
                        divCost.innerHTML = bakeryObject.buildings[i].cost;
                        divNumber.innerHTML = bakeryObject.buildings[i].number;
                        
                        const sonsBuy = document.querySelectorAll('.sonsStoreClick');
                        sonsBuy[Math.floor(Math.random() * (4 - 1)) + 1].play();

                        if(divName.innerHTML !== 'Cursor'){
                            createBackground(divName.innerHTML.toLowerCase());
                        }
                    }
                }
        }
        updateBakery(bakeryObject);        
    }))
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





    
