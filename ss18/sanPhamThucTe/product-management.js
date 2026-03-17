//data
const defaultProducts = [
  { id: 1, name: "Cá chuối", category: "Thực phẩm", price: 23000, quantity: 12, description: "Sekiro", remove: false }
];

let myProducts = JSON.parse(localStorage.getItem("myProducts"));

if(!myProducts){
    localStorage.setItem("myProducts",JSON.stringify(defaultProducts));
    myProducts = JSON.parse(localStorage.getItem("myProducts"));
}

//get main element
let productTableBody = document.getElementById("productTableBody");
let productTable = document.getElementById("productTable");
let emptyState = document.getElementById("emptyState");

let formMain = document.getElementById("form-main");
let addForm = document.querySelector(".form-section form");
let editForm = document.querySelector(".form-edit form");

let searchInput = document.getElementById("searchInput");
let filterCategory = document.getElementById("filterCategory");

let clearAllBtns = document.querySelectorAll(".btn-clear");

let statsTotalText = document.getElementById("totalProducts");
let statsValueText = document.getElementById("totalValue");
let statsQuantityText = document.getElementById("totalQuantity");

//function
let saveData = (accData,currData) => {
    localStorage.setItem(accData,JSON.stringify(currData));
};

let findIndexFromId = (inputId) => {
    for (let i = 0; i < myProducts.length; i++) {
        if(myProducts[i].id == inputId){
            return i;
        }
    }
    return -1;
};

let formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

let addProductItem = (data) => {
    let isLowStock = data.quantity < 10;
    return `
    <tr product-id="${data.id}">
        <td>${data.id}</td>
        <td><strong>${data.name}</strong></td>
        <td>${data.category}</td>
        <td class="price">${formatCurrency(data.price)}</td>
        <td class="quantity ${isLowStock ? 'low-stock' : ''}">${data.quantity}</td>
        <td class="description" title="${data.description}">${data.description || '-'}</td>
        <td>
            <div class="action-buttons">
                <button class="btn-edit icon-edit">&#9998; Sửa</button>
                <button class="btn-delete icon-delete">&#128465; Xóa</button>
            </div>
        </td>
    </tr>
    `;
};

let updateStats = () => {
    let total = 0;
    let quantity = 0;
    let value = 0;
    
    for (const key in myProducts) {
        if(!myProducts[key].remove){
            total++;
            quantity += Number(myProducts[key].quantity);
            value += Number(myProducts[key].price) * Number(myProducts[key].quantity);
        }
    }

    statsTotalText.innerHTML = total;
    statsQuantityText.innerHTML = quantity;
    statsValueText.innerHTML = formatCurrency(value);

    if(total > 0){
        emptyState.classList.remove("show");
        productTable.style.display = "table";
    } else {
        emptyState.classList.add("show");
        productTable.style.display = "none";
    }
};

let disableData = (data,id) => {
    let dataIndex = findIndexFromId(id);
    data[dataIndex].remove = true;
    saveData("myProducts",myProducts);
};

let askUser = (question) => {
    let answear = prompt(question+ " (có/không)").toLocaleLowerCase().trim();
    if(answear == "có"){
        return true;
    }else{
        return false;
    }
};

//function render list handler
let renderProductList = () => {
    productTableBody.innerHTML = "";
    let filterText = searchInput.value.toLowerCase().trim();
    let filterCat = filterCategory.value;

    for (const key in myProducts) {
        if(!myProducts[key].remove){
            let item = myProducts[key];
            let matchSearch = item.name.toLowerCase().includes(filterText) || 
                             (item.description && item.description.toLowerCase().includes(filterText));
            let matchCategory = filterCat == "" || item.category == filterCat;

            if(matchSearch && matchCategory){
                productTableBody.innerHTML += addProductItem(item);
            }
        }
    }
    updateStats();
};

let handleDeleteProduct = (button) => {
    let mainElement = button.parentElement.parentElement.parentElement; // div -> td -> tr
    let id = mainElement.getAttribute("product-id");

    mainElement.remove();
    disableData(myProducts, id);
};

let enableEditMode = (id) => {
    let dataIndex = findIndexFromId(id);
    let item = myProducts[dataIndex];
    
    formMain.classList.add("edit-mode");
    editForm.setAttribute("editing-id", id);
    
    editForm.querySelector("#productName").value = item.name;
    editForm.querySelector("#productCategory").value = item.category;
    editForm.querySelector("#productPrice").value = item.price;
    editForm.querySelector("#productQuantity").value = item.quantity;
    editForm.querySelector("#productDescription").value = item.description;

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

//startup
formMain.classList.remove("edit-mode");
renderProductList();

//event table delegation
productTableBody.addEventListener("click",(element)=>{
    let button = element.target;
    if(button.classList.contains("icon-delete")){
        if(askUser("Bạn có muốn xóa sản phẩm này?")){
            handleDeleteProduct(button);
            updateStats();
        }
    }else if(button.classList.contains("icon-edit")){
        let mainElement = button.parentElement.parentElement.parentElement;
        let id = mainElement.getAttribute("product-id");
        enableEditMode(id);
    };
});

//event form add
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameVal = addForm.querySelector("#productName").value;
    let priceVal = addForm.querySelector("#productPrice").value;
    let qtyVal = addForm.querySelector("#productQuantity").value;

    if(Boolean(nameVal) && Number(priceVal) >= 0 && Number(qtyVal) >= 0){
        let newID = myProducts.length > 0 ? myProducts[myProducts.length - 1].id + 1 : 1;
        let newData = {
            id: newID, 
            name: nameVal, 
            category: addForm.querySelector("#productCategory").value,
            price: Number(priceVal), 
            quantity: Number(qtyVal), 
            description: addForm.querySelector("#productDescription").value,
            remove: false
        };
        
        myProducts.push(newData);
        saveData("myProducts",myProducts);
        
        addForm.reset();
        renderProductList();
    }
});

//event form edit
editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = editForm.getAttribute("editing-id");
    let dataIndex = findIndexFromId(id);
    
    let priceVal = editForm.querySelector("#productPrice").value;
    let qtyVal = editForm.querySelector("#productQuantity").value;

    if(Number(priceVal) >= 0 && Number(qtyVal) >= 0){
        myProducts[dataIndex].name = editForm.querySelector("#productName").value;
        myProducts[dataIndex].category = editForm.querySelector("#productCategory").value;
        myProducts[dataIndex].price = Number(priceVal);
        myProducts[dataIndex].quantity = Number(qtyVal);
        myProducts[dataIndex].description = editForm.querySelector("#productDescription").value;
        
        saveData("myProducts",myProducts);
        
        formMain.classList.remove("edit-mode");
        editForm.reset();
        renderProductList();
    }
});

//event cancel edit
editForm.querySelector(".btn-cancel").addEventListener("click", () => {
    formMain.classList.remove("edit-mode");
    editForm.reset();
});

//event search n filter
searchInput.addEventListener("input", () => {
    renderProductList();
});

filterCategory.addEventListener("change", () => {
    renderProductList();
});

//event delete all
clearAllBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(askUser("Bạn có muốn xóa toàn bộ sản phẩm?")){
            for (const key in myProducts) {
                myProducts[key].remove = true;
            }
            saveData("myProducts", myProducts);
            renderProductList();
            formMain.classList.remove("edit-mode");
        }
    });
});