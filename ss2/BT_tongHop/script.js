let username = prompt("Tên người dùng").trim();
let role = prompt('Vai trò: "admin", "student", "guest"');
let acc_balance = Number (prompt('"50000" hoặc để rỗng/0 nếu hết tiền'));
let cardStatus = Boolean(prompt('Nhập "true" nếu đang hoạt động, hoặc để rỗng/nhập khác để coi như bị khóa'));
let giveBack = Number(prompt("0 là đúng hạn, 5 là quá hạn 5 ngày"));


let isCanBorrow = true;
let displayRole;
let borrowStatus;

switch (role) {
    case "admin":
        alert("Chào Admin, bạn có toàn quyền hệ thống");
        break;
    case "student":
        alert("Chào sinh viên, bạn có thể mượn sách");
        break;
    case "guest":
        alert("Chào khách, bạn chỉ có thể đọc tại chỗ");
        isCanBorrow = false;
        break;
    default:
        alert("Lỗi: Vai trò không hợp lệ!");
        isCanBorrow = false;
        break;
}

if (!username) {
    alert("Tên người dùng ko đc để trống");
} else if (!(role === "student" || role === "admin")) {
    alert ("Bạn không được mượn sách vì bạn không phải admin và khách");
} else if (!(acc_balance > 0 && cardStatus)) {
    alert("Trạng thái thẻ không hoạt động hoặc hết tiền");
} else {
    alert (("Bạn có quyền mượn sách"));
}

console.log(giveBack);

if (Number.isNaN(giveBack)) {
    borrowStatus = "Giá trị ngày trả không hợp lệ";
} else if (giveBack > 10) {
    borrowStatus = "Bạn bị phạt 200k và bị khóa tài khoản";
} else if (giveBack >= 10) {
    borrowStatus = "Bạn bị phạt 10k/ngày";
} else if (giveBack >= 5) {
    borrowStatus = "Bạn bị phạt 5k/ngày";
} else {
    borrowStatus = "Cảm ơn bạn đã trả đúng hạn";
}
alert(borrowStatus);


console.log(`
    Người dùng: ${username}

    Quyền hạn: Chào ${role}, ${isCanBorrow ? "Bạn có thể mượn sách" : "Bạn không thể mượn sách"}

    Kết quả mượn: ${isCanBorrow ? "Bạn có thể mượn sách" : "Bạn không thể mượn sách"}

    Tình trạng trả sách: Quá hạn ${ giveBack === 0 ? "Cảm ơn bạn đã trả đúng ngày": "Bạn đã chậm" + giveBack} ngày

    Tiền phạt: ${borrowStatus} ${giveBack <= 0 ? "":"VND"}
`);
    