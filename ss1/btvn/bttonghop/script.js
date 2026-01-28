let bookName = prompt("Nhập tên sách").trim();
let author = prompt("Nhập tên tác giả").toUpperCase();
let yearPublish = Number(prompt("Nhập năm xuất bản"));
let price = Number(prompt("Nhập giá"));
let quantity = Number(prompt("Nhập số lượng"));

let idBook = `${author.slice(0,2)}${yearPublish}-${Math.floor(Math.random(1,1000) * 1000) + 1}`
let bookAge = 2026 - yearPublish;
let sumPrice = price * quantity;

console.log(idBook);

console.log(author);
console.log(bookName);
console.log(typeof yearPublish);

console.log(`
    --- PHIẾU NHẬP KHO ---
    Mã sách: ${idBook}

    Tên sách: ${bookName}

    Tác giả: ${author}

    Năm xuất bản: ${yearPublish}

    Tuổi sách: ${bookAge}

    Tổng giá trị: ${sumPrice} VNĐ

    Ngăn kệ gợi ý: Kệ số ${Math.floor(Math.random() * 10) + 1}
    `);
