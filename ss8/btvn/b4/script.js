const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

let filterPlayersByPosition = (findingPosition,arr) => {
    let filteredPosition = arr.filter(element => {
        return element.split("-")[1].trim().toLowerCase() === findingPosition.toLowerCase();
    });
    return filteredPosition;
};

console.log(filterPlayersByPosition("Forward",players));
