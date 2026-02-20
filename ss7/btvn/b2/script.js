let playerIds = ["P001", "P002", "P003", "P004", "P005"];

let playerNames = [
    "Nguyen Van A",
    "Tran Thi B",
    "Le Van C",
    "Pham Van D",
    "Hoang Thi E"
];

let playerJerseyNumbers = [10, 7, 8, 9, 11];

let printTeamRoster = function () {
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerNames[i] + " - " + playerJerseyNumbers[i]);
    }
};

let updatePlayerNameAndJersey = function (playerId, newName, newJerseyNumber) {
    let index = playerIds.indexOf(playerId);

    if (index < 0) {
        return false;
    }

    playerNames[index] = newName;
    playerJerseyNumbers[index] = newJerseyNumber;

    return true;
};

printTeamRoster();

let id = prompt("Ma:");
let newName = prompt("Ten moi:");
let newNumber = parseInt(prompt("So ao moi:"));

if (newNumber < 1 || newNumber > 99) {
    console.log("So ao sai");
} else {
    let updated = updatePlayerNameAndJersey(id, newName, newNumber);

    if (updated) {
        console.log("Xong");
        printTeamRoster();
    } else {
        console.log("Khong tim thay");
    }
}