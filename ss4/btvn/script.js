const account = "admin";
const pass = "12345";
const tryTimes = 3;

let canAcess = false;

for (i = tryTimes;i <= tryTimes;i++){
    let inputAcc = prompt("Nhập tên tài khoản");
    let inputPass = prompt("Nhập mật khẩu");
    let msg = "";

    if (inputAcc === account && inputPass === pass) {
        msg = "Chào mừng đã trở lại";
        canAcess = true;
    } else {
        msg = "Sai tài khoản hoặc mật khẩu";
    }

    alert(msg);
}

while(canAcess){

    let log = "";
    let select = parseInt(prompt(`
        1. Phân loại mã số sách (Chẵn/Lẻ)
        2. Thiết kế sơ đồ kho sách (Dạng lưới)
        3. Dự toán phí bảo trì sách theo năm
        4. Tìm mã số sách may mắn
        5. Thoát
        `));

    switch (select) {
        case 1:
            let bookId = parseInt(prompt('Nhập số nguyên(Nhập "0" để thoát)'))
            let scienceBooks = 0;
            let artBooks = 0;

            while(bookId){
                if(bookId % 2 === 0){
                    scienceBooks++;
                    alert("Đây là sách khoa học");
                }else{
                    artBooks++;
                    alert("Đây là sách nghệ thuật");
                }
                bookId = parseInt(prompt('Nhập số nguyên(Nhập "0" để thoát)'));
            }

            log += `\nTổng số sách: ${scienceBooks+artBooks}\nTổng số sách khoa học: ${scienceBooks}\nTổng số sách nghệ thuật: ${artBooks}`;
            break;
        case 2:
            let booksRow = parseInt(prompt("Nhập số hàng"));
            let booksCol = parseInt(prompt("Nhập số cột"));
            for(let row = 1;row <= booksRow;row++){
                log += ` Hàng ${row}: `;
                for(let col = 1;col <= booksCol;col++){
                    log += ` [${row}:${col}]${(row == col)? "(Kệ ưu tiên)":""}`;
                }
            }
            break;
        case 3:
            let bookQuantity = parseInt(prompt("Nhập số sách hiện có"));
            let pricePerBook = parseInt(prompt("Phí bảo trì cho từng cuốn"));
            let years = parseInt(prompt("Số năm dự kiến"));

            for(let year = 1; year <= years; year++){
                pricePerBook *= 1.1;
            }
            log += `\nTổng phí bảo trì: ${pricePerBook*bookQuantity}`
            break;
        case 4:
            let range = parseInt(prompt("Nhập range tìm số may mắn"));
            let sumOfLuckyNumber = 0;
            range < 3 ? range = 3:null;
            for(i = 3;i <= range;i+=3){
                if (i % 5 !== 0) {
                    log += `\nTìm được số may mắn: ${i}`;
                    sumOfLuckyNumber++;
                }
            }
            log += `\nTổng mã may mắn: ${sumOfLuckyNumber}`;
            break;
        case 5:
            canAcess = false;
            log += "\nBạn đã thoát";
            break;
        default:
            break;
    }

    alert(log);
    console.log(log);
}
