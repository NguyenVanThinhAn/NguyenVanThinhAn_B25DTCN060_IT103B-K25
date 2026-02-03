let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let close = false;

while(!close){
    let log = "";
    let select = parseInt(prompt(`
        Nhập lựa chọn của bạn:
        1.Hiển thị sách
        2.Thêm sách mới
        3.Mượn sách
        4.Cập nhật sách
        5.Sắp xếp
        `))
    
    switch (select) {
        case 1:
            for (const book of books) {
                log += `\nSách:${book}`
            }
            break;
        case 2:
            let newBook = prompt("Nhập tên sách mới");
            books.push(newBook);
            break;
        case 3:
            let bookBorrow = books.indexOf(prompt("Nhập tên sách muốn mượn"));
            if(bookBorrow >= 0){
                books.splice(bookBorrow,1);
                log += `\n Mượng thành công`;
            }else {
                log += `\nSách không tồn tại`;
            }
            break;
        case 4:
            let overWriteBook = books.indexOf(prompt("Nhập tên sách muốn đổi"));
            if(overWriteBook >= 0){
                books.splice(overWriteBook,1);
                books.splice(overWriteBook,0,prompt("Nhập sách mới"));
                log += `\nCập nhật thành công`;
            }else {
                log += `\nSách không tồn tại`;
            }
            break;
        case 5:
            books.sort()
            log += `\nĐã sắp xếp`;
            break;
        case 6:
            close = true;
            break;
        default:
            break;
    }
    log ? alert(log):null;
    console.log(log);
}