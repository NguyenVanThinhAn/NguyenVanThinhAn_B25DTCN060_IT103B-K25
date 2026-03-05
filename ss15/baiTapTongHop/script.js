let form = document.getElementById("form");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submitButton");

form.addEventListener("submit",(element) => {
    element.preventDefault();
    if(!Boolean(emailInput.value) || passwordInput.value.length < 8){
        alert("Email không được để trống hoặc mật khẩu phải nhiều hơn 8 chữ số")
    }
    let data = {email: emailInput.value,password: passwordInput.value};
    console.log(data);
});