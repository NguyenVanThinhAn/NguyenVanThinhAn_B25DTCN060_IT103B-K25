const players = [
    { name: "Messi", position: "Forward", age: 36, goals: 25, assists: 15, matches: 34, yellowCards: 2 },
    { name: "Ronaldo", position: "Forward", age: 39, goals: 30, assists: 10, matches: 38, yellowCards: 4 },
    { name: "Neymar", position: "Forward", age: 32, goals: 18, assists: 20, matches: 32, yellowCards: 3 },
    { name: "De Bruyne", position: "Midfielder", age: 33, goals: 8, assists: 25, matches: 35, yellowCards: 1 },
    { name: "Kante", position: "Midfielder", age: 33, goals: 2, assists: 5, matches: 36, yellowCards: 0 },
    { name: "Van Dijk", position: "Defender", age: 33, goals: 5, assists: 3, matches: 33, yellowCards: 2 },
    { name: "Alisson", position: "Goalkeeper", age: 31, goals: 0, assists: 1, matches: 37, yellowCards: 0 }
];

function generateRankingReport(minMatches, playersArray) {

    const filteredPlayers = playersArray.filter(function(player) {
        return player.matches >= minMatches;
    });

    const playersWithScores = filteredPlayers.map(function(player, index) {

        const performanceScoreRaw = (player.goals + player.assists) / player.matches;
        const performanceScore = Number(performanceScoreRaw.toFixed(2));

        const efficiencyScoreRaw = performanceScore - (player.yellowCards / player.matches) * 10;
        const efficiencyScore = Number(efficiencyScoreRaw.toFixed(2));

        return {
            name: player.name,
            position: player.position,
            age: player.age,
            goals: player.goals,
            assists: player.assists,
            matches: player.matches,
            yellowCards: player.yellowCards,
            performanceScore: performanceScore,
            efficiencyScore: efficiencyScore,
            originalIndex: index
        };
    });

    playersWithScores.sort(function(a, b) {

        if (b.efficiencyScore !== a.efficiencyScore) {
            return b.efficiencyScore - a.efficiencyScore;
        }

        if (b.performanceScore !== a.performanceScore) {
            return b.performanceScore - a.performanceScore;
        }

        if (b.goals !== a.goals) {
            return b.goals - a.goals;
        }

        return a.originalIndex - b.originalIndex;
    });

    const finalResult = playersWithScores.map(function(player) {
        return {
            name: player.name,
            position: player.position,
            age: player.age,
            goals: player.goals,
            assists: player.assists,
            matches: player.matches,
            yellowCards: player.yellowCards,
            performanceScore: player.performanceScore,
            efficiencyScore: player.efficiencyScore
        };
    });

    return finalResult;
}

const ranking = generateRankingReport(30, players);
console.log(ranking);