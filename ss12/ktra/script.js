let students = [
    { id: 1, name: "Nguyên Văn A", score: 8.5, gender: "Nam" }, 
    { id: 2, name: "Trân Thị B", score: 4.2, gender: "Nữ" }, 
    { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" }, 
    { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" }, 
    { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" }
];

let filter = (arr) => {
    return arr.filter(element => {
        return element.gender == "Nữ";
    });
};

let sortScore = (arr) => {
    return arr.sort((a,b) => {return b.score - a.score});  
};

console.log(sortScore(filter(students)));

let filterScore = (arr) => {
    return arr.filter(element => {
        return element.score >= 5;
    });
};

let nameSplit = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element.name);
    });
    return newArr;
};

console.log(nameSplit(filterScore(students)));

let filterGenderMale = (arr) => {
    return arr.filter(element => {
        return element.gender == "Nam";
    });
};

let averange = (arr) => {
    let sum = arr.reduce((acc,curr) => {
        return acc += curr.score;
    },0);
    return sum / arr.length
};

console.log("trung bình:", averange(filterGenderMale(students)));