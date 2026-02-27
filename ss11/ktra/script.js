let students = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" }
];

let scoreFilter = (arr,baseScore) => {
    let newList = arr.filter(element => {
        return element.score >= baseScore;
    });
    return newList;
}

let filterdScoreList = scoreFilter(students,8);
let nameString = ``;
filterdScoreList.forEach((element,index) => {
    if(index < filterdScoreList.length - 1){
        nameString += element.name + " và ";
    }else{
        nameString += element.name;
    }
});

console.log(nameString);

let checkLower = (arr,baseScore) => {
    return arr.some(element => {
        return element.score <= baseScore;
    });
}

if(checkLower(students,4)){
    console.log("Có học sinh dưới 4 điểm");
}else{
    console.log("Không có học sinh nào dưới 4 điểm");
}