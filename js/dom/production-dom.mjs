let divProduction = document.getElementById('production');

export const createBackground = (boughtBuilding) => {
    let existingDiv = document.getElementById(`production-${boughtBuilding}`);
    if(existingDiv == null){
        let motherDiv = document.createElement('div');
        motherDiv.id = `production-${boughtBuilding}`;
        divProduction.appendChild(motherDiv);

        let daughterDiv = document.createElement('div');
        daughterDiv.className = boughtBuilding;
        motherDiv.appendChild(daughterDiv);

        let hr = document.createElement('hr');
        divProduction.appendChild(hr);
    }

    if(existingDiv != null){
        let daughterDiv = document.createElement('div');
        daughterDiv.className = boughtBuilding;
        existingDiv.appendChild(daughterDiv);
    }
}