const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};

function addPerformanceScore(obj) {
    const performance = (obj.goals + obj.assists) / obj.matchesPlayed;

    obj.performancePerMatch = Number(performance.toFixed(2));
    obj.isKeyPlayer = obj.performancePerMatch >= 1.0;

    console.log(obj);
}

addPerformanceScore(player);