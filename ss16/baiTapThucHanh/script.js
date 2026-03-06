let employe = [];

const listEmp = document.getElementById("employe-list");
const badgeEmp = document.getElementById("badge");
const header = document.getElementsByClassName("header")[0];

const form = document.getElementById("add-form");
const formFullName = document.getElementById("fullName");
const formEmail = document.getElementById("email");
const formDateOfBirth = document.getElementById("dateOfBirth");
const formPosition = document.getElementById("position");

const errorMsg = document.getElementsByClassName("validate-show");

const submitBtn = form.querySelector(".btn-primary");
const resetBtn = form.querySelector(".btn-secondary");



let formatDate = (date) => {
    let d = new Date(date);
    let day = String(d.getDate()).padStart(2,"0");
    let month = String(d.getMonth()+1).padStart(2,"0");
    let year = d.getFullYear();
    return `${day}/${month}/${year}`;
};



let addHtmlFromData = (element,data) => {
    element.innerHTML += `
    <tr empId="${data.id}">
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${formatDate(data.dateOfBirth)}</td>
        <td>${data.position}</td>
        <td class="actions">
            <button class="btn-edit">Sửa</button>
            <button class="btn-delete">Xóa</button>
        </td>
    </tr>
    `;
};



let displayElement = (boolean,element,display = "inline") => {
    if(boolean){
        element.style.display = display;
        return true;
    }else{
        element.style.display = "none";
        return false;
    }
};



let validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};



let updateEmployeQuantityDisplay = (element,arr) => {  
    let empQuantity = 0;

    for (const data of arr) {
        if(!data.remove){
            empQuantity++;
        }
    }

    element.innerHTML = empQuantity + " nhân viên";
};



let deleteEmploye = (element,arr) => {

    let id = Number(element.getAttribute("empId"));
    let index = id - 1;

    if(!confirm("Bạn chắc chắn muốn xóa nhân viên?")){
        return;
    }

    element.remove();

    if(arr[index]){
        arr[index].remove = true;
    }

};



let addEmp = (listElement,quantityDisplayElement,arr) => {

    let err1 = displayElement(!formFullName.value, errorMsg[0]);
    let err2 = displayElement(!formEmail.value || !validateEmail(formEmail.value), errorMsg[1]);
    let err3 = displayElement(!formDateOfBirth.value, errorMsg[2]);
    let err4 = displayElement(!formPosition.value, errorMsg[3]);

    if (err1 || err2 || err3 || err4) {
        return;
    }

    let newData = {
        id: arr.length + 1,
        name: formFullName.value,
        email: formEmail.value,
        dateOfBirth: formDateOfBirth.value,
        position: formPosition.value,
    };

    arr.push(newData);

    addHtmlFromData(listElement,newData);

    form.reset();

    updateEmployeQuantityDisplay(quantityDisplayElement,arr);
};



let applyChangeEmp = (listElement,editorElement,arr) => {
    let err1 = displayElement(!formFullName.value, errorMsg[0]);
    let err2 = displayElement(!formEmail.value || !validateEmail(formEmail.value), errorMsg[1]);
    let err3 = displayElement(!formDateOfBirth.value, errorMsg[2]);
    let err4 = displayElement(!formPosition.value, errorMsg[3]);

    if (err1 || err2 || err3 || err4) {
        return;
    }

    let elementId = Number(editorElement.getAttribute("edit-mode"));
    let index = elementId - 1;

    let data = {
        id: elementId,
        name: formFullName.value,
        email: formEmail.value,
        dateOfBirth: formDateOfBirth.value,
        position: formPosition.value
    };

    arr[index] = data;

    let htmlDisplayElement = listElement.querySelector(`[empId="${elementId}"]`);

    htmlDisplayElement.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${formatDate(data.dateOfBirth)}</td>
        <td>${data.position}</td>
        <td class="actions">
            <button class="btn-edit">Sửa</button>
            <button class="btn-delete">Xóa</button>
        </td>
    `;
    cancelEdit();
};



let fillFormFromData = (data) => {
    formFullName.value = data.name;
    formEmail.value = data.email;
    formDateOfBirth.value = data.dateOfBirth;
    formPosition.value = data.position;
};



let startEdit = (id) => {
    let data = employe[id-1];
    fillFormFromData(data);
    form.setAttribute("edit-mode",id);
    header.innerHTML = "<h1>Chỉnh Sửa Nhân Viên</h1>";
    submitBtn.innerText = "Cập Nhật";
    resetBtn.innerText = "Hủy";
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};



let cancelEdit = () => {
    form.removeAttribute("edit-mode");
    form.reset();
    header.innerHTML = "<h1>Quản Lý Nhân Viên</h1>";
    submitBtn.innerText = "Thêm Nhân Viên";
    resetBtn.innerText = "Nhập Lại";
};



form.addEventListener("submit",(element) => {
    element.preventDefault();

    if(form.getAttribute("edit-mode")){
        applyChangeEmp(listEmp,form,employe);
    }else{
        addEmp(listEmp,badgeEmp,employe);
    }
});



resetBtn.addEventListener("click",(e)=>{
    if(form.getAttribute("edit-mode")){
        e.preventDefault();
        cancelEdit();
    }
});



listEmp.addEventListener("click",(element) => {
    let button = element.target;

    if(button.classList.contains("btn-delete")){
        let row = button.closest("tr");
        deleteEmploye(row,employe);
        updateEmployeQuantityDisplay(badgeEmp,employe);
    }else if(button.classList.contains("btn-edit")){
        let row = button.closest("tr");
        let id = Number(row.getAttribute("empId"));
        startEdit(id);
    }
});