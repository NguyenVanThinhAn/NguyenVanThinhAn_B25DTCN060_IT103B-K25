let data = [
    "P001-Nguyễn Văn A-Thủ môn",
    "Pe02-TranThiB-Hauve",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

let getAllPositions = function(){
    let log = "";
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let indexData = element.split("-")[2];
        if(!(log.includes(indexData))){
            log += `${indexData}${i != (data.length - 1) ? ",":""}`;
        }
    }
    return log;
}

let findPlayersWithLongestName = function(){
    let longesIndex = -1;
    let numberOfletter = 0;
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let indexData = element.split("-")[1];
        if(indexData.length > numberOfletter){
            numberOfletter = indexData.length;
            longesIndex = i;
        }
    }
    return data[longesIndex];
}

let countPlayersStartingWithLetter = function(inputString){
    let log = "";
    let search = inputString.toLowerCase();
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let name = element.split("-")[1];
        let firstWord = name.split(" ")[0];
        let lowerFirstWord = firstWord.toLowerCase();
        if (lowerFirstWord.startsWith(search)) {
            log += name + ",";
        }
    }
    if (log.endsWith(",")) {
        log = log.slice(0, -1);
    }
    return log;
}

console.log(getAllPositions());
console.log(findPlayersWithLongestName());
console.log(countPlayersStartingWithLetter("Ng"));