let bookName = prompt("Tên sách").trim();
let author = prompt("Tên tác giả").trim();
let publishYear = Number(prompt("Năm xuất bản"));

let bookStatus;

if (2026 == publishYear) {
    bookStatus = "Đây là sách mới";
} else if (2026 - publishYear <= 5) {
    bookStatus = "Sách khá mới"
} else {
    bookStatus = "Sách đã cũ"
}

console.log(bookStatus);
