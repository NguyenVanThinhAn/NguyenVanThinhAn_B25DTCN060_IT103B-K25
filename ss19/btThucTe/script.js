//data
const products = [
    { id: 1, name: "Tai nghe Bluetooth TWS", price: 320000, desc: "Chống ồn nhẹ, pin 20h, kết nối ổn định.", img: "https://picsum.photos/seed/mp19-tws/1200/800" },
    { id: 2, name: "Bàn phím cơ 87 phím", price: 790000, desc: "Switch blue, led trắng, gõ sướng tay.", img: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60" },
    { id: 3, name: "Chuột không dây công thái học", price: 450000, desc: "Thiết kế ergonomic, sạc USB-C.", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60" },
    { id: 4, name: "USB 64GB", price: 120000, desc: "Nhỏ gọn, tốc độ đọc/ghi ổn định.", img: "https://picsum.photos/seed/mp19-usb/1200/800" },
    { id: 5, name: "Đế tản nhiệt laptop", price: 210000, desc: "2 quạt gió, đỡ mỏi cổ tay.", img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60" },
    { id: 6, name: "Cáp sạc Type-C 1m", price: 80000, desc: "Bọc dù, hỗ trợ sạc nhanh.", img: "https://picsum.photos/seed/mp19-cable/1200/800" },
];

let myCart = JSON.parse(localStorage.getItem("myCart"));

if (!myCart) {
    localStorage.setItem("myCart", JSON.stringify([]));
    myCart = JSON.parse(localStorage.getItem("myCart"));
}

//get main element
let productsGrid = document.getElementById("products-grid");
let cartTbody = document.getElementById("cart-tbody");
let cartEmpty = document.getElementById("cart-empty");
let clearCartBtn = document.getElementById("clear-cart-btn");

let statLines = document.getElementById("stat-lines");
let statQty = document.getElementById("stat-qty");
let statTotal = document.getElementById("stat-total");
let cartLinesBadge = document.getElementById("cart-lines-badge");
let cartQtyBadge = document.getElementById("cart-qty-badge");

//function utils
let formatVND = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";
};

let saveData = (accData, currData) => {
    localStorage.setItem(accData, JSON.stringify(currData));
};

let findCartIndexFromId = (inputId, cartData) => {
    return cartData.findIndex(item => item.productId === Number(inputId));
};

let askUser = (question) => {
    let answear = prompt(question + " (có/không)").toLocaleLowerCase().trim();
    if (answear == "có") {
        return true;
    } else {
        return false;
    }
};

//function UI renderers
let addProductItem = (data) => {
    return `
    <article class="card">
        <div class="card-img">
            <img src="${data.img}" alt="${data.name}" loading="lazy" />
        </div>
        <div class="card-body">
            <h3 class="card-title">${data.name}</h3>
            <p class="card-desc">${data.desc}</p>
            <div class="card-footer">
                <div class="price">${formatVND(data.price)}</div>
                <button class="btn btn-primary btn-add-to-cart" product-id="${data.id}">Thêm vào giỏ</button>
            </div>
        </div>
    </article>
    `;
};

let addCartItem = (data) => {
    return `
    <tr cart-product-id="${data.productId}">
        <td>${data.name}</td>
        <td class="right">${formatVND(data.price)}</td>
        <td class="center">
            <div class="qty-controls">
                <button class="btn btn-icon btn-qty-decrease">-</button>
                <span class="qty">${data.quantity}</span>
                <button class="btn btn-icon btn-qty-increase">+</button>
            </div>
        </td>
        <td class="right">${formatVND(data.price * data.quantity)}</td>
        <td class="center">
            <button class="btn btn-danger btn-remove">Xóa</button>
        </td>
    </tr>
    `;
};

let updateStats = () => {
    let totalLines = myCart.length;
    let totalQty = 0;
    let totalPrice = 0;

    for (let item of myCart) {
        totalQty += item.quantity;
        totalPrice += (item.price * item.quantity);
    }

    statLines.innerHTML = totalLines;
    statQty.innerHTML = totalQty;
    statTotal.innerHTML = formatVND(totalPrice);

    cartLinesBadge.innerHTML = `${totalLines} dòng`;
    cartQtyBadge.innerHTML = `${totalQty} món`;

    if (totalLines === 0) {
        cartEmpty.classList.remove("hidden");
        cartTbody.parentElement.classList.add("hidden"); 
    } else {
        cartEmpty.classList.add("hidden");
        cartTbody.parentElement.classList.remove("hidden");
    }
};

let renderCart = () => {
    cartTbody.innerHTML = "";
    for (const key in myCart) {
        cartTbody.innerHTML += addCartItem(myCart[key]);
    }
    updateStats();
};

//function data handlers
let handleAddToCart = (button) => {
    let id = Number(button.getAttribute("product-id"));
    let productData = products.find(p => p.id === id);
    let cartIndex = findCartIndexFromId(id, myCart);

    if (cartIndex !== -1) {
        myCart[cartIndex].quantity += 1;
    } else {
        myCart.push({
            productId: productData.id,
            name: productData.name,
            price: productData.price,
            quantity: 1
        });
    }

    saveData("myCart", myCart);
    renderCart();
};

let handleUpdateQuantity = (button, isIncrease) => {
    let mainElement = button.closest("tr");
    let id = mainElement.getAttribute("cart-product-id");
    let cartIndex = findCartIndexFromId(id, myCart);

    if (isIncrease) {
        myCart[cartIndex].quantity += 1;
    } else {
        myCart[cartIndex].quantity -= 1;
        if (myCart[cartIndex].quantity === 0) {
            myCart.splice(cartIndex, 1);
        }
    }

    saveData("myCart", myCart);
    renderCart();
};

let handleDeleteCartItem = (button) => {
    let mainElement = button.closest("tr");
    let id = mainElement.getAttribute("cart-product-id");
    let cartIndex = findCartIndexFromId(id, myCart);

    if (confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?")) {
        myCart.splice(cartIndex, 1);
        saveData("myCart", myCart);
        renderCart();
    }
};

//startup
productsGrid.innerHTML = "";
for (const key in products) {
    productsGrid.innerHTML += addProductItem(products[key]);
}
renderCart();

//event
productsGrid.addEventListener("click", (element) => {
    let button = element.target;
    if (button.classList.contains("btn-add-to-cart")) {
        handleAddToCart(button);
    }
});

cartTbody.addEventListener("click", (element) => {
    let button = element.target;
    if (button.classList.contains("btn-qty-increase")) {
        handleUpdateQuantity(button, true);
    } else if (button.classList.contains("btn-qty-decrease")) {
        handleUpdateQuantity(button, false);
    } else if (button.classList.contains("btn-remove")) {
        handleDeleteCartItem(button);
    }
});

clearCartBtn.addEventListener("click", () => {
    if (myCart.length > 0 && askUser("CẢNH BÁO: Bạn có muốn xóa toàn bộ giỏ hàng?")) {
        myCart = [];
        saveData("myCart", myCart);
        renderCart();
    }
});