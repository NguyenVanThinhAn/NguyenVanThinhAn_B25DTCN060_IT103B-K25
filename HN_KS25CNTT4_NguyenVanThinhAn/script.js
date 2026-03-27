//data
let empData = JSON.parse(localStorage.getItem("empData")) || [
    // {id: 1,name: "Nguyen A",dob: "10/10/2000",email: "dz@gmail.com",adress: "Ha Noi"},
    // {id: 2,name: "Nguyen B",dob: "10/10/2000",email: "dz4@gmail.com",adress: "Ha Noi"},
    // {id: 3,name: "Nguyen C",dob: "10/10/2000",email: "dz34@gmail.com",adress: "Ha Noi"},
    // {id: 4,name: "Nguyen D",dob: "10/10/2000",email: "dz2@gmail.com",adress: "Ha Noi"},
];
localStorage.setItem("empData",JSON.stringify(empData));
//get element
const title = document.getElementById("formTitle");
const buttonSubmit = document.getElementById("btnSubmit");
const totalBadge = document.getElementById("totalBadge");

const inputName = document.getElementById("inputName");
const inputDate = document.getElementById("inputDob");
const inputEmail = document.getElementById("inputEmail");
const inputAdress = document.getElementById("inputAddress");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");



const emptyState = document.getElementById("emptyState");

const tableBody = document.getElementById("tableBody");

let currIndex = 0;

let editingElement = null;
let editingIndex = 0;

//function
const saveData = () => {
    localStorage.setItem("empData",JSON.stringify(empData));
}



const dataToHTML = (data,currIndex) => {
    return `
    <tr id="${data.id}">
        <td>${currIndex || 0}</td>
        <td class="td-name">${data.name}</td>
        <td class="dob">${data.dob}</td>
        <td class="td-email">${data.email}</td>
        <td class="adress">${data.adress || "none"}</td>
        <td>
            <div class="td-actions">
            <button class="btn btn-sm btn-edit">✏ Sửa</button>
            <button class="btn btn-sm btn-delete">✕ Xóa</button>
            </div>
        </td>
    </tr>
    `
}

const updateTotal = () => {
    let count = 0;
    for (const element of empData) {
        if(!element.remove){
            count++;
        }
    }
    totalBadge.innerHTML = count + " nhân viên";
}

const clearHTML = (element) => {
    element.innerHTML = "";
}

const render = (keyword,sortMode) => {
    let dummyData = [...empData];
    clearHTML(tableBody);
    let index = 1

    let processData = (dataTable) => {
        for (const key in dataTable) {
            if(!Boolean(keyword)){
                if(!dataTable[key]["remove"]){
                    tableBody.insertAdjacentHTML("beforeend",dataToHTML(dataTable[key],index));
                    index++
                };
            }else if((dataTable[key].name).includes(keyword)){
                if(!dataTable[key]["remove"]){
                    tableBody.insertAdjacentHTML("beforeend",dataToHTML(dataTable[key],index));
                    index++
                };
            }
        }
    }

    if(!Boolean(sortMode)){
       processData(empData);
       console.log("ằugauwhfihaiwfhawhwahhiwhihai");
       
    }else{
    console.log("akwnmfkaw");

    if (sortMode == "az") {
            dummyData.sort((a, b) => a.name.localeCompare(b.name));
            processData(dummyData);

    }else if (sortMode == "za") {
            dummyData.sort((a, b) => b.name.localeCompare(a.name));
            processData(dummyData);

    }else if (sortMode == "date-za") {
            dummyData.sort((a, b) => new Date(b.dob) - new Date(a.dob));
            processData(dummyData);

    }else if (sortMode == "date-az") {
            dummyData.sort((a, b) => new Date(a.dob) - new Date(b.dob));
            processData(dummyData);
        }
    }
    currIndex = index - 1;
};

const resetForm = () => {
    inputName.value = "";
    inputEmail.value = "";
    inputDate.value = "";
    inputAdress.value = "";
};

const checkEmptyState = () => {
    if(empData.length <= 0){
        emptyState.classList.remove("hide");
    }else{
        emptyState.classList.add("hide");
    }
}

const editMode = (enable) => {
    if(enable){
        title.innerHTML = "Cập nhật nhân viên";
        buttonSubmit.innerHTML = "Lưu thay đổi";
        tableBody.classList.add("editMode");
    }else {
        title.innerHTML = "Thêm nhân viên mới";
        buttonSubmit.innerHTML = "Thêm nhân viên";
        tableBody.classList.remove("editMode");
    }
}

const checkEmail = (email) => {
    for (const key in empData) {
        if(empData[key].email.toLocaleLowerCase() == email.toLocaleLowerCase()){
            return key;
        }
    }
    return -1;
}

const deleteData = (button) => {
    let mainElement = button.parentElement.parentElement.parentElement;
    mainElement.remove();
    empData[mainElement.id - 1]["remove"] = true;
    console.log(empData[mainElement.id - 1]);
    saveData();
}

const askUser = (question) => {
    let result = prompt(question + " (có/không)").trim().toLocaleLowerCase();
    if(result == "có"){
        return true;
    }else{
        return false;
    }
}

//setup
render();
updateTotal();
checkEmptyState();

//event

buttonSubmit.addEventListener("click",(event) => {
    if(!Boolean(inputName.value) ||!Boolean(inputDate.value) ||!Boolean(inputEmail.value)){
        alert("Bạn phải điền tên, ngày sinh,Email trước đã");
        return;
    }

    if(tableBody.classList.contains("editMode")){

        if(checkEmail(inputEmail.value) != editingIndex){
            alert('Email bị trùng, vui lòng nhập lại');
            return;
        }

        empData[editingIndex].name = inputName.value;
        empData[editingIndex].dob = inputDate.value;
        empData[editingIndex].email = inputEmail.value;
        empData[editingIndex].adress = inputAdress.value;

        editingElement.querySelector(".td-name").innerHTML = inputName.value;
        editingElement.querySelector(".dob").innerHTML = inputDate.value;
        editingElement.querySelector(".td-email").innerHTML = inputEmail.value;
        editingElement.querySelector(".adress").innerHTML = inputAdress.value || "none";
        editMode(false);
        resetForm();
        saveData();

    }else{
        if(checkEmail(inputEmail.value)){
            alert('Email bị trùng, vui lòng nhập lại');
            return;
        }
        let id = empData.length + 1;
        let newData = {id: id,name: inputName.value,dob: inputDate.value,email: inputEmail.value,adress: inputAdress.value};
        empData[id - 1] = newData;
        tableBody.insertAdjacentHTML("beforeend",dataToHTML(newData,currIndex + 1));
        currIndex++;
        saveData();
        resetForm();
        checkEmptyState();
    }
});

tableBody.addEventListener("click",(event) => {
    let button = event.target;
    if(button.classList.contains("btn-edit")){
        let mainElement = button.parentElement.parentElement.parentElement;
        editingElement = mainElement;
        editingIndex = mainElement.id - 1;
        editMode(true);
        
        inputName.value = empData[editingIndex].name;
        inputDate.value = empData[editingIndex].dob;
        inputEmail.value = empData[editingIndex].email;
        inputAdress.value = empData[editingIndex].adress;
    }else if(button.classList.contains("btn-delete")){
        if(askUser("Bạn có muốn xóa không?")){
            deleteData(button);
        };
    }
});


searchInput.addEventListener("input",(event) => {
    if(sortSelect.value == "name_asc"){
        render(searchInput.value,"az");
    }else if(sortSelect.value == "name_desc"){
        render(searchInput.value,"za");
    }else if(sortSelect.value == "dob_asc"){
        render(searchInput.value,"date-az");
    }else if(sortSelect.value == "dob_desc"){
        render(searchInput.value,"date-za");
    }else{
        render(searchInput.value);
    }
});