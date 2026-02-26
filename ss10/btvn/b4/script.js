const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 }
];

function analyzeSalary(minYears, teamPlayers) {

    const filtered = teamPlayers.filter(player => player.years >= minYears);

    if (filtered.length === 0) {
        return {
            totalSalary: 0,
            highestPaid: null,
            lowestPaid: null
        };
    }

    const totalSalary = filtered.reduce((sum, player) => sum + player.salary, 0);

    const highestPaid = filtered.reduce((max, player) =>
        player.salary > max.salary ? player : max
    );

    const lowestPaid = filtered.reduce((min, player) =>
        player.salary < min.salary ? player : min
    );

    return {
        totalSalary,
        highestPaid: {
            name: highestPaid.name,
            salary: highestPaid.salary
        },
        lowestPaid: {
            name: lowestPaid.name,
            salary: lowestPaid.salary
        }
    };
}

const result = analyzeSalary(15, players);
console.log(result);