const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lua", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");
let form = document.getElementById("product-form");

let textInput = document.getElementById("product-name");
let numInput = document.getElementById("product-price");

let addDiv = (data = {id: 0,name: "none",price: 0}) => {
    return `<div class="product" id="${products.id}">${data.name}: ${formatMoney(data.price)}đ</div>
    `
}

let formatMoney = (money) => {
    return money.toLocaleString('vi-VN');
};

let findDataFromID = (arr,inputData) => {
    for (const index in arr) {
        if(arr[index].id == inputData){
            return index
        }
    }
    return -1;
};

productList.innerHTML = products.map(element => {
    return addDiv(element);
}).join("");


form.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    if(!Boolean(textInput.value)){
        console.log("Không dc để trống tên sp");
        return;
    }
    if(Number(textInput.value) < 1){
        console.log("Không dc để giá nhỏ hơn 1");
        return
    }
    let newArrData = {id: products.length + 1, name: textInput.value, price: Number(numInput.value)};
    products.push(newArrData);
    productList.innerHTML += addDiv(newArrData);
});

productList.addEventListener("click",(element) => {
    let button = element.target;
    if(button.classList.contains("delete-button")){
        let dataIndex = findDataFromID(button.parentElement.getAttribute("id"));
        products.splice(dataIndex,1);
        button.parentElement.remove();
        console.log(products);
        
    };
});