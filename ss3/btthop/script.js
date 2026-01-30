let pass = "admin123"
let maxTry = 3;

let accesAllow = false;

// Cache
let inputCache = 0;
let finalMsg;

while(true){
    if (inputCache >= maxTry) {
        finalMsg = "Hệ thống đã bị khóa";
    }
    inputCache++;

    let inputPass = prompt("Nhập mật khẩu");
    if (inputPass === pass) {
        finalMsg = "Chào mừng!"
        accesAllow = true;
        break;
    }
    alert(`Sai mật khẩu còn ${maxTry - inputCache} lần`);
}

alert(finalMsg);

do{
    let select = parseInt(prompt(`
        1 - Nhập lô sách mới
        2 - Vẽ sơ đồ kệ sách
        3 - Thoát
        `));
    
    switch (select) {
        case 1:
            let bookQuantity = parseInt(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
            let sumPrice = 0;
            for(let i = 1;i <= bookQuantity;i++){
                let price = Number(prompt(`Nhập giá tiền của cuốn sách số: ${i}`));
                if (!price) {
                    alert("Lỗi giá");
                    continue;
                }
                sumPrice += price;
            }

            alert(`Tổng số sách đợt này là ${sumPrice}$`)
            break;
        case 2:
            for(khu = 1;khu <= 3;khu++){
                for(ke = 1;ke <= 5;ke++){
                    console.log(`Khu ${khu}, kệ ${ke}${khu === 2 && ke === 3 ? "(Đang sửa chữa)" : ""}`);
                }
            }
            break;
        case 3:
            alert("Đã thoát");
            accesAllow = false;
            break;
        default:
            alert("Lỗi lựa chọn");
            break
    }
    
}while(accesAllow);