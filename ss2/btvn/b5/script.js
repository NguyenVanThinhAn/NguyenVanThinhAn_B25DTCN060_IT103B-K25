let bookName = prompt("Nhập tên sách:").trim();
let bookStatus = prompt("Trạng thái sách (có sẵn / đã mượn):").trim().toLowerCase();
let publishYear = parseInt(prompt("Nhập năm xuất bản:"));

let bookDate = 2026 - publishYear;
let finalMsg;

if (bookStatus === "có sẵn" && bookDate <= 5) {
    finalMsg = "Sách này mới và có sẵn để mượn";
} else if (bookStatus === "đã mượn" && bookDate <= 10) {
    finalMsg = "Sách này đã mượn nhưng khá mới, có thể mượn lại sau";
} else if (bookStatus === "đã mượn" && bookDate >= 10) {
    finalMsg = "Sách này đã mượn nhưng khá mới, có thể mượn lại sau";
} else if (bookStatus === "có sẵn" && bookDate >= 5) {
    finalMsg = "Sách này có sẵn nhưng đã lâu năm";
}

console.log(finalMsg);
