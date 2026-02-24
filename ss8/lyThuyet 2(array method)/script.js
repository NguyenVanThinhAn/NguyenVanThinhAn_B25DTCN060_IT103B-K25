const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

squad.map((element,index) => {
    element[0] = "Tên cầu thủ" + element[0];
    element[1] = "Số bàn thắng" + element[1];
    element[2] = "Vị trí" + element[2];

    return element.join();
})