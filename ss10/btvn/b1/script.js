const player = {
    name: "Messi",
    position:"Forward",
    age: 36,
    goals: 25,
    assists: 15,
};

let showarrInfo = (arr) => {
    console.log("Tên:",arr.name);
    console.log("Vị trí:" ,arr.position);
    console.log('Tuổi:' ,arr.age);
    console.log("bàn thắng kiến tạo mùa này:",arr.goals );
    console.log("Kiến tạo mùa này:" ,arr.assists);
    console.log("Tổng đóng góp:" ,arr.assists + arr.goals);
};

showarrInfo(player);