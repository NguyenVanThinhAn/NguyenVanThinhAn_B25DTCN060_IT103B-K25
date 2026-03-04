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
let findBar = document.getElementById("search-input");
let sortButton = document.getElementById("sortButton");

let addDiv = (data = {id: 0,name: "none",price: 0}) => {
    return `<div class="product" id="${data.id}"><button class="update-button" style="background-color: cyan;">Cập nhật</button><button class="delete-button" style="background-color: red;">Xóa</button>${data.name}: <span class="price">${formatMoney(data.price)}</span>đ</div>
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

let searchChildVisibleControl = (element,keyword) => {
    let childList = element.children;
    for (const child of childList) {
        let childName = child.innerText.toLowerCase();
        if(childName.includes(keyword.toLowerCase())){
            child.style.display = "block";
        }else{
            child.style.display = "none";
        }
    }
}

let sortDataFromPrice = (mode = 1) => {
    let sortingArr = structuredClone(products);
    console.log(sortingArr);
    
    if(mode == 1){
        sortingArr.sort((a,b) => {return b.price - a.price})
    }else{
        sortingArr.sort((a,b) => {return a.price - b.price})
    }
    productList.innerHTML = "";

    productList.innerHTML = sortingArr.map(element => {
    return addDiv(element);
}).join("");
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
        let dataIndex = findDataFromID(products, button.parentElement.getAttribute("id"));
        products.splice(dataIndex,1);
        button.parentElement.remove();
    }else if(button.classList.contains("update-button")){
        let dataIndex = findDataFromID(products,button.parentElement.getAttribute("id"));
        let newPrice = Number(prompt("Nhập giá mới"));
        newPrice?newPrice:1;
        products[dataIndex].price = newPrice;
        button.parentElement.querySelector(".price").innerHTML = formatMoney(newPrice) + "đ"
        console.log(products);
        console.log(button.parentElement.getAttribute("id"));
    };
});

findBar.addEventListener("input",() => {
    searchChildVisibleControl(productList,findBar.value);
});


sortButton.addEventListener("click",() => {
    let chose = prompt("chọn kiểu sort lớn->nhỏ/nhỏ->lớn(1 hoặc 2)");
    sortDataFromPrice(chose);
})