const account = "admin";
const pass = "12345";
const tryTimes = 3;
let books = [];

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
        1. Nhập thêm lô sách mới.
        2. Hiển thị danh sách sách.
        3. Tìm kiếm sách.
        4. Cập nhật tên sách.
        5. Đảo ngược thứ tự kệ sách.
        6. Nhập kho từ nguồn khác.
        7. Thoát chương trình.
        `));

    switch (select) {
        case 1:
            let bookString = prompt("Nhập sách và phân cách nhau bằng dấu phẩy").trim();
            let bookTable = bookString.split(",")
            for (const element of bookTable) {
                element.trim();
            }
            books = books.concat(bookTable);
            break;
        case 2:
            for (const element of books) {
                log += `\nSách: ${element}`;
            }
            break;
        case 3:
            let bookName = prompt("Nhập tên sách").trim();
            let index = books.indexOf(bookName)
            if(index >= 0){
                log += `\n Tìm thấy sách ${bookName} ở vị trí: ${index}`;
            }else {
                log += `\nKhông tìm thấy sách: ${bookName}`;
            }
        case 4:
            let bookName2 = prompt("Nhập tên sách").trim();
            let index2 = books.indexOf(bookName2)
            if(index >= 0){
                books.splice(index2,1,prompt("Nhập tên sách mới").trim());
            }else {
                log += `\nKhông tìm thấy sách: ${bookName2}`;
            }
        case 5:
            books.reverse()
            log += `\nĐã đảo ngược kệ sách`;
            break;
        case 6:
            let bookString2 = prompt("Nhập kho sách mới và phân cách nhau bằng dấu phẩy").trim();
            let bookTable2 = bookString2.split(",")
            for (const element of bookTable2) {
                element.trim();
            }

            books = books.concat(bookTable2);
            log += `\nĐã Nhập kho mới`;
            break;
        case 7:
            canAcess = false;
            log += "\nBạn đã thoát";
            break;
        default:
            break;
    }

    log?alert(log):null;
    console.log(log);
}