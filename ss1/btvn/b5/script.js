let bookName = prompt("Nhập tên sách");
let publishYear = Number(prompt("Năm xuất bản của sách"));

document.log(`
    Tên sách: ${bookName};
    Năm xuất bản: ${publishYear};
    Tuổi của sách: ${2026 - publishYear}
    `);