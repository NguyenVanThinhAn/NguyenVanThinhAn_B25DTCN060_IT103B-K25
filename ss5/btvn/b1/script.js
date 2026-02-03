let books = [];
let bookQuantity = parseInt(prompt("Nhập số sách bạn muốn thêm"));

for (let i = 1;i <= bookQuantity;i++) {
    books.push(prompt("Nhập tên cuốn sách"));
}

console.log(`Tổng số sách được trả: ${books.length}`);

for (let i = 0;i <= (books.length - 1);i++) {
    console.log("Sách đã được trả: "+books[i]);
}
