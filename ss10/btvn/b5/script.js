const teamHistory = [
    {
        name: "Messi",
        position: "Forward",
        nationality: "Argentina",
        seasons: {
            "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
            "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
            "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 }
        }
    },
    {
        name: "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        seasons: {
            "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
            "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
            "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 }
        }
    }
];

function generatePlayerSeasonReport(playerName, teamHistory) {

    const player = teamHistory.find(p => p.name === playerName);

    if (!player) {
        return `Không tìm thấy cầu thủ ${playerName}`;
    }

    const seasons = player.seasons;
    const seasonKeys = Object.keys(seasons);

    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalYellowCards = 0;

    let bestSeason = null;

    for (let season of seasonKeys) {
        const data = seasons[season];

        totalMatches += data.matches;
        totalGoals += data.goals;
        totalAssists += data.assists;
        totalYellowCards += data.yellowCards;

        if (
            !bestSeason ||
            data.goals > bestSeason.goals ||
            (data.goals === bestSeason.goals && data.assists > bestSeason.assists)
        ) {
            bestSeason = {
                season: season,
                goals: data.goals,
                assists: data.assists
            };
        }
    }

    return {
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        careerStats: {
            totalMatches,
            totalGoals,
            totalAssists,
            totalYellowCards,
            averageGoalsPerMatch: Number((totalGoals / totalMatches).toFixed(2)),
            averageAssistsPerMatch: Number((totalAssists / totalMatches).toFixed(2)),
            bestSeason
        }
    };
}

console.log(generatePlayerSeasonReport("Messi", teamHistory));