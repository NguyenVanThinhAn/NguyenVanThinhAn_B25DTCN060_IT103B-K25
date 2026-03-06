let employe = [

];

const listEmp = document.getElementById("employe-list");
const badgeEmp = document.getElementById("badge");

const form = document.getElementById("add-form");
const formFullName = document.getElementById("fullName");
const formEmail = document.getElementById("email");
const formDateOfBirth = document.getElementById("dateOfBirth");
const formPosition = document.getElementById("position");

const errorMsg = document.getElementsByClassName("validate-show");



let addHtmlFromData = (element,data) => {
    element.innerHTML += `
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.dateOfBirth}</td>
        <td>${data.position}</td>
        <td class="actions">
            <button class="btn-edit">
                Sửa
            </button>
            <button class="btn-delete">
                Xóa
            </button>
        </td>
    </tr>
    `;
}

let displayElement = (boolean,element,display = "inline") => {
    if(boolean){
        element.style.display = display;
        return true;
    }else{
        element.style.display = "none";
        return false;
    }
}

let updateEmployeQuantityDisplay = (element,arr) => {
    console.log(element,arr);
    
    element.innerHTML = arr.length + " nhân viên";
};

let deleteEmploye = (element,arr) => {
    element.parentElement.parentElement.remove();
};


//event

form.addEventListener("submit",(element) => {
    element.preventDefault();
    let err1 = displayElement(!formFullName.value, errorMsg[0]);
    let err2 = displayElement(!formEmail.value, errorMsg[1]);
    let err3 = displayElement(!formDateOfBirth.value, errorMsg[2]);
    let err4 = displayElement(!formPosition.value, errorMsg[3]);

    if (err1 || err2 || err3 || err4) {
        return;
    }

    let newData = {
        id: employe.length + 1,
        name: formFullName.value,
        email: formEmail.value,
        dateOfBirth: formDateOfBirth.value,
        position: position.value,
    }

    addHtmlFromData(listEmp,newData);
    employe.push(newData);

    formFullName.value = "";
    formEmail.value = "";
    formDateOfBirth.value = "";
    formPosition.value = "";

    updateEmployeQuantityDisplay(badgeEmp,employe);
});


//event

listEmp.addEventListener("click",(element) => {
    let button = element.target;

});