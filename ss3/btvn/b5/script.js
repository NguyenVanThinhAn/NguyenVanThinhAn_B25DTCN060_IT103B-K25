let tongTuChoi = 0;
let tongThanhCong = 0;
let tongChoDuyet = 0;

while (true) {
    let tiepTuc = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if (tiepTuc === null || tiepTuc.toLowerCase() === "không") {
        console.log("--- BÁO CÁO TỔNG HỢP ---");
        console.log("Số yêu cầu bị từ chối: " + tongTuChoi);
        console.log("Số đặt trước thành công: " + tongThanhCong);
        console.log("Số chờ xét duyệt: " + tongChoDuyet);
        break;
    }

    if (tiepTuc.toLowerCase() === "có") {
        let tenBanDoc = prompt("Nhập tên bạn đọc:");
        let maSach = prompt("Nhập mã sách muốn đặt trước:");
        let tenSach = prompt("Nhập tên sách (tham khảo):");
        let soNgayCho = parseInt(prompt("Nhập số ngày dự kiến chờ:"));
        let uuTien = parseInt(prompt("Nhập mức ưu tiên (1: SV, 2: GV, 3: Đặc cách):"));

        if (soNgayCho > 45) {
            tongTuChoi++;
            console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        } 
        else if (uuTien === 3) {
            tongThanhCong++;
            console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        } 
        else if (uuTien === 2 && soNgayCho <= 30) {
            tongThanhCong++;
            console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        } 
        else if (uuTien === 1 && soNgayCho <= 21) {
            tongThanhCong++;
            console.log("Đặt trước thành công");
        } 
        else {
            tongChoDuyet++;
            console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        }
    }
}