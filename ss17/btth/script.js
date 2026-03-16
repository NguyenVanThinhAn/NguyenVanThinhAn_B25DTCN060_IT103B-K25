const products = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "./img/banhchung.webp" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.jpg" },
    { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },
    { id: 5, name: "Lì Xì", price: 20000, img: "./img/lixi.webp" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.jpg" }
];

let onCart = JSON.parse(localStorage.getItem("onCartData")) || {};

let productList = document.getElementById("product-list");
let cartList = document.getElementById("cart-list");

let formatMoney = (money) => {
    return money.toLocaleString('vi-VN');
};

let renderProducts = (arr) => {
    if(Array.isArray(arr)){
        return arr.map(product => {
            return `
                <div class="product-card">
                    <img src=${product.img} alt="">
                    <h3>${product.name}</h3>
                    <p class="price" >${formatMoney(product.price)}đ</p>
                    <button class="btn-add" id="${product.id}">Thêm vào giỏ</button>
                </div>
            `
        });
    };
};

let getDataFromID = (arr,id) => {
    return arr.find(element => {
        return element.id == id;
    });
};

let addToCart = (itemData, quantity = 1) => {
    return `
    <li>
    <span class="cart-item-name" cart-id="${itemData.id}">${itemData.name} <span class="quantity" quantity="${quantity}">x${quantity}</span></span>
    <div>
    <span class="cart-item-price">${formatMoney(itemData.price)}</span>
    <button class="btn-remove">X</button>
    </div>
    </li>
    `;
}

let renderOnCartProducts = (arr, basedDataArr) => {
    for (const key in arr) {
        let id = Number(key);
        let productInfo = getDataFromID(basedDataArr, id);
        let savedQuantity = arr[key].quantity;
        cartList.innerHTML += addToCart(productInfo, savedQuantity);
    }
};

let updateTotalMoney = (arr = []) => {
    const el = document.querySelector("#total-price");
    if (!el) return;
    if (!arr.length) {
        el.textContent = "0đ";
        return;
    }
    el.textContent = formatMoney(
        arr.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
    ) + "đ";
};

renderOnCartProducts(onCart,products);
updateTotalMoney(Object.values(onCart));

productList.innerHTML = renderProducts(products).join("");

productList.addEventListener("click",(element) => {
    let button = element.target;
    let elementID = button.getAttribute("id");
    
    if(button.classList.contains("btn-add")){
        let elementData = getDataFromID(products,elementID);
        let cartElement = cartList.querySelector(`[cart-id="${elementID}"]`);

        if(cartElement){
            let cardElementQuantity = cartElement.querySelector(".quantity");
            let quantity = Number(cardElementQuantity.getAttribute("quantity"));
            quantity++;
            cardElementQuantity.setAttribute("quantity",quantity);
            cardElementQuantity.innerHTML = `x${quantity}`;
            onCart[elementID]["quantity"] = quantity;
            updateTotalMoney(Object.values(onCart));
        } else {
            cartList.innerHTML += addToCart(elementData);
            onCart[elementID] = {price: elementData.price, quantity: 1};
            
            let emptyMsg = document.getElementById("empty-msg");
            if(emptyMsg) emptyMsg.style.display = "none";
            
            console.log("Đã ẩn");
            updateTotalMoney(Object.values(onCart));
        }
    }
    localStorage.setItem("onCartData",JSON.stringify(onCart));
});

cartList.addEventListener("click",(event) => {
    let button = event.target;

    if(button.classList.contains("btn-remove")){
        let li = button.closest("li");
        let nameSpan = li.querySelector(".cart-item-name");
        let key = nameSpan.getAttribute("cart-id");
        
        delete onCart[key];
        li.remove();

        console.log(onCart);
        console.log("children:", cartList.children.length);

        let emptyMsg = document.getElementById("empty-msg");
        if (emptyMsg) {
            if(cartList.children.length < 2){
                emptyMsg.style.display = "flex";
            } else {
                emptyMsg.style.display = "none";
            }
        }
        
        updateTotalMoney(Object.values(onCart));
        localStorage.setItem("onCartData", JSON.stringify(onCart));
    }
});