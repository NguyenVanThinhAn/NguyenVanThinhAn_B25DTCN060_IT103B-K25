let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let bookQuantity = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

for (let i = 1;i <= bookQuantity;i++) {
    let bookId = prompt("Nhập mã sách(không được để trống").trim();
    let bookName = prompt("Nhập tên sách(không được để trống").trim();
    let quantity = parseInt(prompt("Nhập số lượng"));
    
    while(!(bookId&&bookName)){
        bookId = prompt("Nhập mã sách(không được để trống").trim();
        bookName = prompt("Nhập tên sách(không được để trống").trim();
    }

    booksId.push(bookId);
    booksName.push(bookName);
    inventoryQuantity.push(bookId);
}

for(let i = 0;i <= (booksId.length - 1);i++){
    console.log(`Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]}`);
    
}