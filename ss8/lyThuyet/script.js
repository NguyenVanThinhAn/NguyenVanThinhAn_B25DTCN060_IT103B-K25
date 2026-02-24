//callback
const sum = (a,b) => {
    return a + b;
};

console.log("sum =", sum(10,20));

function greet(name){
    console.log("Hello " + name);
};

function userInputProcess(callback){
    let name = "RE";
    callback(name);
};

userInputProcess(greet);

// hàm trả lại một hàm khác
function multiplyBy(x){
    return function(y){
        return x * y;
    };
};

let double = multiplyBy(10);

console.log(double(5));

