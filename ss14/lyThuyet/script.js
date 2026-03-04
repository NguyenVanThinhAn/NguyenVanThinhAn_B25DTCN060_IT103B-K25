//Gọi id
console.log(document.getElementById("nana"));
//Gọi theo tên tags
console.log(document.getElementsByTagName("h1"));
//chọn theo tags/id nhưng chỉ gọi 1 phần tử
console.log(document.querySelector("#nana-2"));
//chọn theo tags/id nhưng chỉ gọi tất cả phần tử tương ứng
console.log(document.querySelectorAll(".para"));
//gọi theo thuộc tính
console.log(document.querySelectorAll("input[type='text']"));
