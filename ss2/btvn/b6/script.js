let bookName = prompt("Nhập tên sách:").trim();
let borrowerName = prompt("Nhập tên người mượn:").trim();
let bookStatus = prompt("Tình trạng sách (có sẵn, đã mượn, không có sẵn):").trim().toLowerCase();
let borrowDays = parseInt(prompt("Số ngày đã mượn (nhập 0 nếu chưa mượn):"));

let finalMsg;

let libraryCard = prompt("Bạn có thẻ thư viện không(có/không)");
libraryCard = libraryCard === "có" ? true : false;
bookStatus = bookStatus === "có sẵn" ? true : false;

if (libraryCard && bookStatus) {
    finalMsg = "Chúc mừng, bạn có thể mượn sách này";
} else if (!libraryCard && borrowDays <= 30) {
    finalMsg = `${libraryCard ? "Sách đang được mượn, vui lòng đợi đến khi trả lại" : "Bạn không thể mượn sách nếu không có thẻ thư viện"}`;
} else if (!bookStatus) {
    finalMsg = "Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sa";
}