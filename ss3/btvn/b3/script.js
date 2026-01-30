while (true) {
    let tiepTuc = prompt("Có yêu cầu gia hạn mới không? (có/không)");

    if (tiepTuc === null || tiepTuc.toLowerCase() === "không") {
        break;
    }

    if (tiepTuc.toLowerCase() === "có") {
        let tenBanDoc = prompt("Nhập tên bạn đọc:");
        let tenSach = prompt("Nhập tên sách:");
        let soNgayDaMuon = parseInt(prompt("Nhập số ngày đã mượn hiện tại:"));
        let soNgayMuonThem = parseInt(prompt("Nhập số ngày muốn gia hạn thêm:"));

        let tongNgay = soNgayDaMuon + soNgayMuonThem;

        if (tongNgay > 60) {
            alert("Không được phép gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        } else if (soNgayDaMuon > 45) {
            alert("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        } else {
            alert("Gia hạn thành công");
        }
    }
}