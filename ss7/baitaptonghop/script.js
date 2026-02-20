let players = [];
let goals = [];

let canAcess = true;

let addPlayer = (name,goal) => {
    players.push(name);
    goals.push(goal);
}

let showSquad = () => {
    let msg = "";
    for(let i = 0;i <= (players.length - 1);i++){
        msg += `\n${i}. ${players[i]} - ${goals[i]}`
    }
    return msg;
}

let getTotalGoals = () => {
    let sum = 0;
    for (const element of goals) {
        sum += element;
    }
    return sum;
}

let findMostGoals = () => {
    let max = 0;
    for (const element of goals) {
        element > max ? max = element : null;
    }
    return max;
}


while(canAcess){

    let log = "";
    let select = parseInt(prompt(`
        1. Nhập cầu thủ mới
        2. Xem danh sách đội hình
        3. Xem thành tích toàn đội
        4. Tìm Vua phá lưới
        0. Thoát chương trình.
        `));

    switch (select) {
        case 1:
            addPlayer(prompt("Nhập tên cầu thủ").trim(),parseInt(prompt("Nhập số bàn thắng")));
            log += `\nĐã thêm thành công`;
            break;
        case 2:
            log += showSquad();
            log += `\nĐã hiện danh sách`;
            break;
        case 3:
            log += `Tổng số bàn thắng: ${getTotalGoals()}`;
            break;
        case 4:
            log += `Tổng: ${findMostGoals()}`;
            break;
        case 0:
            canAcess = false;
            log += "\nBạn đã thoát";
            break;
        default:
            break;
    }

    log?alert(log):null;
    console.log(log);
}