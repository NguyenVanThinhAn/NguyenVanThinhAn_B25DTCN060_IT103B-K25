let dayCycle = 30;

let borrowTurn;
let borrowDays;

let i,v;


for (i = 0; i <= dayCycle; i++) {
    borrowTurn = parseInt(prompt("Hôm nay có bao nhiêu lượt mượn sách"));
    for (v = 0; v < borrowTurn; v++){
        borrowDays = parseInt(prompt(`Nhập số ngày muốn mượn của lượt: ${v}`));
        if (borrowDays > 14) {
            alert("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)")
            borrowDays = parseInt(prompt("Nhập số ngày muốn mượn"));
        }
        alert("Mượn thành công");
    }
    console.log(`Tổng số lượt mượn: ${borrowTurn}`);
}