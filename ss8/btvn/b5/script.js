const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1",
];

let filterPlayerScore = (minPerformance,arr) => {
    let topScores = arr.filter((element) => {
        let playerData = element.split("-")
        playerData = playerData.map(element => {
            return element.trim();
        });
        return (playerData[2] + playerData[3]) >= minPerformance;
    });
    return topScores;
};

let reportTopPerformers = (minPerformance,arr) => {
    let topPlayerList = filterPlayerScore(minPerformance,arr);

    let result = topPlayerList.reduce((acc,curr,index) => {
        let playerData = curr.split("-");
        playerData = playerData.map(element => {
            return element.trim();
        });

        let score = (Number(playerData[2]) + Number(playerData[3]));

        console.log(playerData[0]+": ",score);
        
        return acc + score;
    },0);

    return result;
};

console.log("Tổng:", reportTopPerformers(10,players));


