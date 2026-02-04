let string = "Quý,Nam,Lan,Hùng,Nam";
let students = string.split(",")

students.reverse()
console.log(students);

console.log(`${students.includes("Lan")?"Tìm thấy Lan":"Không tìm thấy Lan"}`);
console.log(`Nam ở vị trí:${students.indexOf("Nam")}`);


//Bài 2

let nums = [100, 200, 300, 400];

for (const key in nums) {
    console.log(`Index: ${key}`);
}

for (const element of nums) {
    console.log(`Giá trị phần tử: ${element}`);
}

let sum = 0;
for(i = 0;i <= (nums.length - 1);i++){
    sum += nums[i];
}
console.log(`Sum: ${sum}`);
