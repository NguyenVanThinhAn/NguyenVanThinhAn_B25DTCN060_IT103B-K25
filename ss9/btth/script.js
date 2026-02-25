let products = [
    ["Sản phẩm 1", 5000, 30],
    ["Sản phẩm 2", 12000, 15],
    ["Sản phẩm 3", 8000, 50],
    ["Sản phẩm 4", 25000, 10],
    ["Sản phẩm 5", 17000, 22],
    ["Sản phẩm 6", 9000, 40],
    ["Sản phẩm 7", 30000, 5],
    ["Sản phẩm 8", 4500, 60],
    ["Sản phẩm 9", 11000, 18],
    ["Sản phẩm 10", 20000, 12],
]; //Tên,giá,số lượng
let close = false;

let filterProduct = (arr,basePrice) => {
    let stringLog = ``;
    arr.forEach((element) => {
        if(element[1] > basePrice){
            stringLog += `\n${element[0]} Giá: ${element[1]} Số lượng: ${element[0]}`;
        }
    });
    if(stringLog){
        return stringLog;
    }else{
        return "Không có sp nào";
    }
};

let checkProduct = (arr) => {
    let stringLog = ``;
    stringLog += "\n Tồn tại sản phẩm hết hàng: ";
    if(arr.some(element => {return element[2] < 1})){
        stringLog += "Có";
    }else{
        stringLog += "Không";
    };

    stringLog += "\n Tất cả sản phẩm có trên 100: ";
    if(arr.every(element => {return element[1] > 100})){
        stringLog += "Có";
    }else{
        stringLog += "Không";
    };
    if(stringLog){
        return stringLog;
    }else{
        return "Không có sp nào";
    }
};

let analysisProduct = (arr) => {
    return arr.reduce((acc,curr,index) => {
        return acc + curr[1] * curr[2];
    },0);
};

let saleUpdate = (arr) => {
    let newProductList = arr.map((element) => {
        return [
            element[0],
            element[1] * 0.9,
            element[2],
        ];
    });
    alert("GIÁ MỚI" + filterProduct(newProductList,0));
    return newProductList;
}

let findProduct = (arr,productName) => {
    return arr.filter(element => {
        return (element[0].toLowerCase()).includes(productName.toLowerCase());
    });
};

let isProductReady = (arr) => {
    let stringLog = ``;
    arr.forEach((element) => {
        if(element[2] > 0){
            stringLog += `\n${element[0]}: Còn hàng`;
        }else{
            stringLog += `\n${element[0]}: Hết hàng`;
        }
    });
    if(stringLog){
        return stringLog;
    }else{
        return "Không có sp nào";
    }
};


while(!close){
    let log = "";
    let select = parseInt(prompt(`
           --- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
        1. Lọc sản phẩm cao cấp (>500)
        2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
        3. Phân tích giá trị vốn hóa (Tổng tài sản)
        4. Triển khai chiến dịch chiết khấu (Giảm 10%)
        5. Truy vấn sản phẩm theo từ khóa
        6. Báo cáo tình trạng tồn kho
        7. Thoát chương trình

        Vui lòng nhập lựa chọn của bạn (1-7):
        `))
    
    switch (select) {
        case 1:
            alert(filterProduct(products,500));
            break;
        case 2:
            alert(checkProduct(products));
            break;
        case 3:
            alert("Vốn hóa hiện tại: " + analysisProduct(products));
            break;
        case 4:
            products = saleUpdate(products);
            break;
        case 5:
            alert(filterProduct(findProduct(products,prompt("Nhập tên sản phẩm bạn muốn tìm")),0));
            break;
        case 6:
            alert(isProductReady(products));
            break;
        case 7:
            close = true;
            break;
        default:
            break;
    }
    log ? alert(log):null;
    console.log(log);
}