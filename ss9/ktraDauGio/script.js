let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

let isLessThanZero = (arr) => {
    return arr.every(element => {
        return element >= 0;
    });
};

let profitChecking = (arr) => {
    return arr.map(element => {
        return element *= 0.9;
    });
};

let netProfits = profitChecking(revenues);

console.log("Có đơn hàng nào lỗ không:",isLessThanZero(orders));
console.log("Danh sách lãi:",netProfits);

