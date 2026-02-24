const players = [
    "Ronaldo - Forward - 30 - 10 - 3",
    "Neymar - Forward - 18 - 20 - 4",
    "De Bruyne - Midfielder - 8 - 25 - 6",
    "Kante - Midfielder - 2 - 5 - 1",
    "Van Dijk - Defender - 5 - 3 = 4",
    "Alisson - Goalkeeper - 0 - 1 - 7",
    "Messi - Forward - 25 - 15 - 10",
];

//Pairs to save data
let RoleAndCount = {} // Pair Role and count

let RoleAndIndex ={} // Pair Role And index
index = 0

players.forEach(element => {
    let ele = element.split(" - ") // split data by " - "
    if(!RoleAndCount[ele[1]] != ""){ // if have new Role add new role
        RoleAndCount[ele[1]] = 1
        RoleAndValue[ele[1]] = parseInt(ele[2]) + parseInt(ele[3])
        RoleAndIndex[index] = ele[1]
        index++
        console.log("Add new role")
        
    }
    else{ // else plush count and sum value
        RoleAndCount[ele[1]]++
        RoleAndValue[ele[1]] += parseInt(ele[2]) + parseInt(ele[3])
        console.log("Old role");
        
    }
});

//print value to log
for (let i = 0; i < index; i++) {
    let role = RoleAndIndex[i];
    console.log(role);
        console.log(RoleAndValue[role]/RoleAndCount[role]);
        
}



