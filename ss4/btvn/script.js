
const factorial_number_storage = {};
let current_max_factorial = 0;

function isEven(number){
    let r = number - (2 * Math.floor(number/2))
    return r == 0 ? true : false;

    // hoặc number % 2 == 0
}

function isPositve(number){
    return number > 0 ? true : false;
}

function divisorList(number) {
    for (let i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
        (number % i === 0) ? console.log(`Tìm được ước của ${number}: ${i}` +(i !== number / i? `\nTìm được ước của ${number}: ${number / i}`: "")) : null;
    }
}


//Lời giải cho divisorList. Các ước luôn có quy tắc là 2 ước của một số nhân với nhau luôn bằng số đó. Vậy nên có thể tách vòng lặp xuống sqrt(số đó), sau đó dùng số đó chia cho ước vừa tìm được là ra ước còn lại

function factorial(number) {
    let factorial_number = 1
 
    if(current_max_factorial && current_max_factorial < number) {
        factorial_number = factorial_number_storage[`${current_max_factorial}`];
        for (i = current_max_factorial + 1;i <= number;i++) {
            factorial_number *= i;
        }
        factorial_number_storage[number] = factorial_number;
        current_max_factorial = number;
    } else if (factorial_number_storage[`${number}`]){
        factorial_number = factorial_number_storage[`${number}`];
    } else {
        for (i = 2;i <= number;i++) {
            factorial_number *= i;
        }
        factorial_number_storage[number] = factorial_number;
        current_max_factorial = number;
    }
    return factorial_number;
}

//Vì không có quy tắc nào có thể áp dụng với việc tính giai thừa, vậy nên chỉ có một cách là dùng lại các đáp án trước đó để tính tiếp cho các đáp án chưa được tính.

// Đã có giai thừa lớn nhất nhỏ hơn number -> tính tiếp
// Nếu không, nhưng number đã có cache -> dùng luôn
// Còn lại là tính từ đầu

function isPrimeNumber(number) {
    let numberIsEven = isEven(number);
    let primeNumber = true;
    if (numberIsEven) {
        if (number != 2) {
           primeNumber = false; 
        }
    } else {
        for(let i = 3;i <= Math.sqrt(number);i += 2){
            if(number % i == 0) {
                primeNumber = false;
                break
            }
        }
    }

    return primeNumber;
}

//Vì số lẻ chỉ có thể chia hết cho số lẻ nên ta tách thành 2 trường hợp chẵn và lẻ. Nếu là chẵn thì lại có quy tắc là chỉ có 2 là số chẵn nguyên tố duy nhất, còn lại đều chia hết cho số chắn khác. Nếu là số lẻ có thể tối ưu bằng cách bắt đầu từ 3 và nhảy 2 bước để tránh số chẵn. Có một quy tắc nữa là tìm số nguyên tố của n thì chỉ cần đặt range của n bằng sqrt(n)

// LƯU Ý, GIẢI THÍCH VỀ sqrt(n) MÀ TÔI DÙNG ĐỂ TỐI ƯU NÃY GIỜ
// tưởng tượng bạn có 4 = 2^2. sqrt(4) = 2, vậy là mất đi 1 số 2. Nhưng vấn đề là tôi đang check xem nó có chia hết cho x hay không. Vậy nên kết quả của 2 bị loại bỏ và 2 được giữ lại là giống nhau 100%.


function listPrimeOnRange(number){
    for(let i = 2;i <= number; i++){
        if (isPrimeNumber(i)) {
            console.log(`Tìm được số nguyên tố: ${i}`);
        }
    }
}


function sumOfNumber(number){
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}






function luckyNumbers(number){
    let totalLuckyNumber = 0;
    for (let i = 3;i <= number;i += 3){
        if(i % 5 !== 0){
            console.log(`Tìm được số may mắn là: ${i}`);
            totalLuckyNumber += 1;
        }
    }
    console.log(`Tổng số may mắn tìm được: ${totalLuckyNumber}`);
}