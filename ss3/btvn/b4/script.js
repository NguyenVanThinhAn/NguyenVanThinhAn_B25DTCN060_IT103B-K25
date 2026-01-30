let tongSachMat = 0;
let tongSachHetHang = 0;
let tongTonKhoNhieu = 0;
let tongTonKhoBinhThuong = 0;

while (true) {
    let tiepTuc = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (tiepTuc === null || tiepTuc.toLowerCase() === "không") {
        console.log("--- BÁO CÁO THỐNG KÊ KIỂM KÊ ---");
        console.log("Tổng số sách mất: " + tongSachMat);
        console.log("Tổng số sách hết hàng: " + tongSachHetHang);
        console.log("Tổng số sách tồn kho nhiều (>=10): " + tongTonKhoNhieu);
        console.log("Tổng số sách tồn kho bình thường (1-9): " + tongTonKhoBinhThuong);
        break;
    }

    if (tiepTuc.toLowerCase() === "có") {
        let maSach = prompt("Nhập mã sách (không được để trống):");
        
        if (!maSach || maSach.trim() === "") {
            alert("Lỗi: Mã sách không được để trống!");
            continue;
        }

        let tenSach = prompt("Nhập tên sách:");
        let soLuongThucTe = parseInt(prompt("Nhập số lượng thực tế trong kho (số nguyên >= 0):"));
        let tinhTrang = parseInt(prompt("Nhập tình trạng sách (1: Bình thường, 2: Mất):"));

        if (tinhTrang === 2) {
            tongSachMat++;
            console.log("Kết quả: Sách mất");
        } 
        else if (tinhTrang === 1 && soLuongThucTe === 0) {
            tongSachHetHang++;
            console.log("Kết quả: Sách hết (vẫn còn trong hệ thống)");
        } 
        else if (tinhTrang === 1 && soLuongThucTe >= 10) {
            tongTonKhoNhieu++;
            console.log("Kết quả: Sách tồn kho nhiều");
        } 
        else if (tinhTrang === 1 && soLuongThucTe >= 1 && soLuongThucTe <= 9) {
            tongTonKhoBinhThuong++;
            console.log("Kết quả: Sách tồn kho bình thường");
        } 
        else {
            console.log("Dữ liệu không hợp lệ, không ghi nhận thống kê.");
        }
    }
}