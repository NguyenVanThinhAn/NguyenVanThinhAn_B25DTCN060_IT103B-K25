localStorage.setItem("userName",'Nguyen Van A');
localStorage.setItem("age",20);
localStorage.setItem("isMarried",true);

let users = [
    {
        id: 1,
        name: "Lê Văn C",
    },
    {
        id: 2,
        name: "Lê Văn D",
    },
];



localStorage.setItem("userData",JSON.stringify(users));

console.log(JSON.parse(localStorage.getItem("userData")));

localStorage.clear();