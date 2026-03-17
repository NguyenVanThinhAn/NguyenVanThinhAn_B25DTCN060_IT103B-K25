let data = JSON.parse(localStorage.getItem("productData"));
if(!data){
    data = [];
}

let productTbody = document.getElementById("product-tbody");

let productCodeInput = document.getElementById("product-code");
let productNameInput = document.getElementById("product-name");
let productPriceInput = document.getElementById("product-price");
let btnAdd = document.querySelector(".btn-add");

let saveData = (dataName,newData) => {
    localStorage.setItem(dataName,JSON.stringify(newData));
}

let checkValidate = (value) => {
    return Boolean(value);
}

let checkDuplicateCode = (code) => {
    for (const element of data) {
        if(element.code === code){
            return true;
        }
    }
    return false;
}

let formatPrice = (price) => {
    return Number(price).toLocaleString("vi-VN") + " đ";
}

let renderData = () => {
    productTbody.innerHTML = "";

    data.forEach((element,index) => {
        productTbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${element.code}</td>
                <td>${element.name}</td>
                <td>${formatPrice(element.price)}</td>
            </tr>
        `;
    });
}

btnAdd.addEventListener("click",(event) => {

    let code = productCodeInput.value.trim();
    let name = productNameInput.value.trim();
    let price = productPriceInput.value.trim();

    if(
        !checkValidate(code) ||
        !checkValidate(name) ||
        !checkValidate(price)
    ){
        alert("Không được để trống dữ liệu");
        return;
    }

    if(checkDuplicateCode(code)){
        alert("Mã sản phẩm đã tồn tại");
        return;
    }

    let newData = {
        code: code,
        name: name,
        price: price
    };

    data.push(newData);

    saveData("productData",data);

    renderData();

    productCodeInput.value = "";
    productNameInput.value = "";
    productPriceInput.value = "";

    alert("Thêm sản phẩm thành công!");
});

renderData();