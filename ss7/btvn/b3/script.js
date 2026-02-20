let players = [];

let n = parseInt(prompt("So cau thu:"));

for (let i = 0; i < n; i++) {

    let id;
    while (true) {
        id = prompt("Ma:");
        let isDuplicate = false;

        for (let j = 0; j < players.length; j++) {
            let parts = players[j].split("-");
            if (parts[0] === id) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            break;
        }
    }

    let name;
    while (true) {
        name = prompt("Ten:");
        if (name !== "") {
            break;
        }
    }

    let select = parseInt(prompt("1-4:"));
    let name2 = "";

    if (select === 1) {
        name2 = "Thu mon";
    } else if (select === 2) {
        name2 = "Hau ve";
    } else if (select === 3) {
        name2 = "Tien ve";
    } else if (select === 4) {
        name2 = "Tien dao";
    } else {
        name2 = "Tien ve";
    }

    let playerString = id + "-" + name + "-" + name2;
    players.push(playerString);
}

let printTeamRoster = function () {
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log((i + 1) + ". Ma: " + parts[0] + " | Ten: " + parts[1] + " | Vi tri: " + parts[2]);
    }
};

let pushPlayer = function (name, position) {
    let id = prompt("Ma moi:");
    let playerString = id + "-" + name + "-" + position;
    players.push(playerString);
};

printTeamRoster();