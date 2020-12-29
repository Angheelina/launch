// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/



window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        if (isFuelLevelValid() && isCargoMassValid() && areFieldsFilled()) {
            let faultyItems = document.querySelector("#faultyItems");
            faultyItems.style.visibility = "visible";
        }

        event.preventDefault();
    });
});

function isFuelLevelValid(){
    let fuelLevelEl = document.querySelector("input[name=fuelLevel]");
    let valid = isNumeric(fuelLevelEl.value)
    if (!valid) {
        alert("Fuel Level is invalid.  ");
    }

    return valid;
}

function isCargoMassValid() {
    let cargoMassEl = document.querySelector("input[name=cargoMass]");
    let valid = isNumeric(cargoMassEl.value)
    if (!valid) {
        alert("Cargo Mass is invalid.");
    }

    return valid;
}

function areFieldsFilled() {
    let pilotNameEl = document.querySelector("input[name=pilotName]");
    let copilotNameEl = document.querySelector("input[name=copilotName]");
    let fuelLevelEl = document.querySelector("input[name=fuelLevel]");
    let cargoMassEl = document.querySelector("input[name=cargoMass]");

    if (pilotNameEl.value === "" || copilotNameEl.value === "" ||
        fuelLevelEl.value === "" || cargoMassEl.value === "") {
        alert("All fields must be filled in.");
        return false;
    }

    return true;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}