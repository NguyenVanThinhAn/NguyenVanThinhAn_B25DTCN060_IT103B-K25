// data
let data = JSON.parse(localStorage.getItem("contactData"));
if (!data) {
  data = [];
}

// state edit
let editIndex = -1;

// DOM
let contactTbody = document.getElementById("contact-tbody");

let nameInput = document.getElementById("contact-name");
let phoneInput = document.getElementById("contact-phone");
let emailInput = document.getElementById("contact-email");

let form = document.getElementById("contact-form");
let btnAdd = document.querySelector(".btn-add");

// save
let saveData = () => {
  localStorage.setItem("contactData", JSON.stringify(data));
};

// render
let renderData = () => {
  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].phone}</td>
        <td>${data[i].email}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-edit" onclick="editContact(${i})">Sửa</button>
            <button class="btn-delete" onclick="deleteContact(${i})">Xóa</button>
          </div>
        </td>
      </tr>
    `;
  }

  contactTbody.innerHTML = html;
};

// validate
let validate = (name, phone, email) => {
  if (!name) {
    alert("Tên không được để trống!");
    return false;
  }

  if (name.length < 3) {
    alert("Tên phải có ít nhất 3 ký tự!");
    return false;
  }

  if (!phone) {
    alert("Số điện thoại không được để trống!");
    return false;
  }

  if (!email) {
    alert("Email không được để trống!");
    return false;
  }

  return true;
};

// resetForm
let resetForm = () => {
  nameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";

  editIndex = -1;
  btnAdd.textContent = "Thêm";
};


// edit
function editContact(index) {
  let contact = data[index];
  
  nameInput.value = contact.name;
  phoneInput.value = contact.phone;
  emailInput.value = contact.email;
  
  editIndex = index;
  btnAdd.textContent = "Cập nhật";
}

// delete
function deleteContact(index) {
  let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
  
  if (!confirmDelete) return;
  
  data.splice(index, 1);
  
  alert("Xóa sản phẩm thành công!");
  
  saveData();
  renderData();
}

// setup
renderData();


// add
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = nameInput.value.trim();
  let phone = phoneInput.value.trim();
  let email = emailInput.value.trim();

  if (!validate(name, phone, email)) return;

  if (editIndex !== -1) {
    data[editIndex] = { name, phone, email };

    alert("Cập nhật sản phẩm thành công!");

    resetForm();
    saveData();
    renderData();
    return;
  }

  data.push({ name, phone, email });

  saveData();
  renderData();
  resetForm();
});