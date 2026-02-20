let data = [
    "P001-Nguyễn Văn A-Thủ môn",
    "Pe02-TranThiB-Hauve",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

let printTeamRoster = function(){
    let log = "";
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        if(!(log.includes(element))){
            let letterIndex = element.indexOf("-");
            while(letterIndex >= 0){
                element = element.slice(0,letterIndex) + "|" + element.slice(letterIndex + 1,element.length);
                letterIndex = element.indexOf("-");
            }
            log += `${element}${i != (data.length - 1) ? ",":""}`;
        }
    }
    return log;
}

let countPlayerByPostion = function(){
    let outputData = [
        [],
        []
    ];
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let indexData = element.split("-")[2];
        let elementDataIndex = outputData[0].indexOf(indexData);
        if(elementDataIndex >= 0){
            outputData[1][elementDataIndex] += 1;
        }else if(elementDataIndex < 0){
            outputData[0].push(indexData);
            outputData[1].push(1);
        }
    }
    return outputData;
}

let hasGoalkeeper = function(){
    let isHaveGoalKeeper = false;
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let indexData = element.split("-")[2];
        if(indexData == "Thủ môn"){
            isHaveGoalKeeper = true;
        }
    }
    return isHaveGoalKeeper;
}

console.log(printTeamRoster());
console.log(countPlayerByPostion());
console.log(hasGoalkeeper());
