const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];

let getUpperNames = (arr) => {
    arr.forEach(element => {
        console.log(element.toUpperCase());
    });
}

getUpperNames(playerNames);