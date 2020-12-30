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
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(
        function(response) {
            response.json().then(
                function(json) {
                    let planet = json[1];
                    let html = `<h2>Mission Destination</h2>
                                <ol>
                                   <li>Name: ${planet.name}</li>
                                   <li>Diameter: ${planet.diameter}</li>
                                   <li>Star: ${planet.star}</li>
                                   <li>Distance from Earth: ${planet.distance}</li>
                                   <li>Number of Moons: ${planet.moons}</li>
                                </ol>
                                <img src="${planet.image}">`;

                    let missionTarget = document.querySelector("#missionTarget");
                    missionTarget.innerHTML = html;
                }
            );
        }
    );

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        if (isFuelLevelValid() && isCargoMassValid() && areFieldsFilled()) {
            let launchStatus = document.querySelector("#launchStatus");
            let faultyItems = document.querySelector("#faultyItems");
            let pilotStatus = document.querySelector("#pilotStatus");
            let copilotStatus = document.querySelector("#copilotStatus");
            let fuelStatus = document.querySelector("#fuelStatus");
            let cargoStatus = document.querySelector("#cargoStatus");

            faultyItems.style.visibility = "visible";
            pilotStatus.textContent = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.textContent = `Co-pilot ${copilotName.value} is ready for launch`;

            if (fuelLevel.value < 10000) {
                fuelStatus.textContent = `There is not enough fuel for the journey`;
                launchStatus.textContent = `Shuttle not ready for launch`;
                launchStatus.style.color = "red";
            }

            if (cargoStatus.value > 10000) {
                cargoStatus.textContent = `There is too much mass for the journey`;
                launchStatus.textContent = `Shuttle not ready for launch`;
                launchStatus.style.color = "red";
            }

            if (fuelLevel.value >= 10000 && cargoStatus.value <= 10000) {
                launchStatus.textContent = `Shuttle is ready for launch`;
                launchStatus.style.color = "green";
            }
        }

        event.preventDefault();
    });
});

function isFuelLevelValid(){
    let fuelLevelEl = document.querySelector("input[name=fuelLevel]");
    let valid = isNumeric(fuelLevelEl.value)
    if (!valid) {
        alert("Fuel Level is invalid. ");
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