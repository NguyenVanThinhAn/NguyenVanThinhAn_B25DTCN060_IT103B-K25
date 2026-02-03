let books = [];
let bookQuantity = parseInt(prompt("Hôm nay có mấy cuốn sách bị trả muộn"));

for (let i = 1;i <= bookQuantity;i++) {
    books.push(prompt("Nhập tên cuốn sách"));
}

console.log(`Tổng số sách trả muộn: ${books.length}`);

for (let i = 0;i <= (books.length - 1);i++) {
    console.log(i+"-"+books[i]);
}