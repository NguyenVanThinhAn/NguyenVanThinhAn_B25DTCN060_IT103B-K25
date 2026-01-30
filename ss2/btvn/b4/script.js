let bookName = prompt("Nhập tên sách:").trim();
let borrowerName = prompt("Nhập tên người mượn:").trim();
let favoriteLevel = parseInt(prompt("Mức độ yêu thích (1-5):"));

let finalMsg = "";

if (favoriteLevel === 5 || favoriteLevel === 4) {
    finalMsg = "Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!";
} else if (favoriteLevel === 3) {
    finalMsg = "Sách này khá ổn, có thể mượn";
} else if (favoriteLevel === 2 || favoriteLevel === 1) {
    finalMsg = "Sách này bạn có thể cân nhắc mượn lại sau";
} else {
    finalMsg = "Mức độ yêu thích không hợp lệ (vui lòng nhập từ 1-5)";
}

console.log(`Người mượn: ${borrowerName}`);
console.log(`Tên sách: ${bookName}`);
console.log(`Thông báo: ${finalMsg}`);

alert(`Chào ${borrowerName}!\nCuốn "${bookName}": ${finalMsg}`);