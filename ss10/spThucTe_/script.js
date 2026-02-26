/**
 * 0 = vực thẳm
 * 1 = nước
 * 2 = đất liền
 */
let worldMap = [
    [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,2,2,2,2,2,1,1,1,1,0],
    [0,1,1,2,2,2,2,2,2,2,1,1,1,0],
    [0,1,2,2,2,2,2,2,2,2,2,1,1,0],
    [0,1,2,2,2,2,2,2,2,2,2,1,1,0],
    [0,1,2,2,2,2,2,2,2,2,2,1,1,0],
    [0,1,1,2,2,2,2,2,2,2,1,1,1,0],
    [0,1,1,1,2,2,2,2,2,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]
];

let mapState = [];

let texture = {
    0: "⬛️",
    1: "🟦",
    2: "🟩",
}

let character = {
    0: "⬆️",
    1: "➡️",
    2: "⬇️",
    3: "⬅️",
}

let cantSpawn = "01";


/**
 * máu, vị trí, vị trí nhìn(0-trên,1-phải,2-dưới,3-trái), tầng
 */
let player = [0,[0,0],0,0];

let canSpawn = () => {
    for (let i = 0; i < worldMap[0].length; i++) {
        for (let j = 0; j < worldMap[0][i].length; j++) {
            if (!cantSpawn.includes(String(worldMap[0][i][j]))) {
                return [i,j];
            }
        }
    }
};

let drawCurrentLayer = (layer) => {
    for (let i = 0; i < worldMap[layer].length; i++) {
        let lineBlock = []
        for (let j = 0; j < worldMap[layer][i].length; j++) {
            lineBlock.push(texture[worldMap[layer][i][j]]);
        }
        mapState.push(lineBlock);
    }
}

let spawnPlayer = () => {
    player[0] = 100;
    player[1] = canSpawn();
};

drawCurrentLayer(player[3])

spawnPlayer()

let render = () => {
    let output = "";

    for (let i = 0; i < mapState.length; i++) {
        for (let j = 0; j < mapState[i].length; j++) {

            if (i === player[1][0] && j === player[1][1]) {
                output += character[player[2]];
            } else {
                output += mapState[i][j];
            }

        }
        output += "\n";
    }

    alert(output);
};

render();