let playerIds = [];
let playerPositions = [];

let n = parseInt(prompt("So cau thu:"));

for (let i = 0; i < n; i++) {

    let id;
    while (true) {
        id = prompt("Ma:");
        if (playerIds.indexOf(id) < 0) {
            break;
        }
    }

    let select = parseInt(prompt("1-4:"));
    let name = "";

    if (select === 1) {
        name = "Thu mon";
    } else if (select === 2) {
        name = "Hau ve";
    } else if (select === 3) {
        name = "Tien ve";
    } else if (select === 4) {
        name = "Tien dao";
    } else {
        name = "Tien ve";
    }

    playerIds.push(id);
    playerPositions.push(name);
}

let printTeamRoster = function () {
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerPositions[i]);
    }
};

let findPlayersByPosition = function (position) {
    let result = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            result.push(i);
        }
    }
    return result;
};

printTeamRoster();

let searchPos = prompt("Tim vi tri:");
let found = findPlayersByPosition(searchPos);

console.log(found);