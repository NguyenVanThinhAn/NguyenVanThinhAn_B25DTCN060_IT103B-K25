let bookName = prompt("Tên sách").trim();
let bookType = prompt("Thể loại sách").trim();
let bookStatus = prompt("Tình trạng sách");

let finalMsg;

if ((bookType === "Khoa học" || bookType === "Lịch sử") && bookStatus === "có sẵn") {
    finalMsg = `Sách này ${bookStatus === "có sẵn" ? "có thể mượn" : "đã được mượn"}`;
} else if (bookType === "Văn học" || bookType === "Truyện") {
    finalMsg = 'Sách này có thể đọc giải trí';
}

console.log(finalMsg);
