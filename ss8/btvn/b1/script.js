const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

let displayPlayers = (arr) => {
    arr.forEach(element => {
        console.log(element);
    });
}

displayPlayers(players)