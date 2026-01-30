let dayCycle = 30;

let i,v;
for (i = 1;i <= 30; i++){
    giveBackTurn = parseInt(prompt("Hôm nay có bao nhiêu lượt trả lại"));
    for (v = 1;v <=giveBackTurn;v++){
        let userName = prompt("Tên người dùng").trim();
        let bookName = prompt("Nhập tên sách").trim();
        let borrowDays = parseInt(prompt("Số ngày mượn"));
        let lateGiveBackTurn = 0;
        let finalAlert;
        while (borrowDays < 1) {
            alert("Số ngày không hợp lệ, vui lòng nhập lại")
            borrowDays = parseInt(prompt("Số ngày mượn"));
        }

        if (borrowDays <= 14) {
            finalAlert = "Trả đúng hạn";
        } else if (borrowDays >= 15 && borrowDays <= 21) {
            finalAlert = "Trả muộn nhẹ. " + "Phạt nhắc nhở";
            lateGiveBackTurn++
        } else {
            finalAlert = "Quá hạn nghiêm trọng. " + "Cần ghi biên bản phạt"
        }
        finalAlert = finalAlert + ` Tổng số lượt mượn: ${borrowDays}. Tổng số lượt nộp muộn: ${lateGiveBackTurn}`
        alert(finalAlert);
    }
}