let header = document.getElementById("nana");

console.log(header.textContent);

console.log(header.innerText);

console.log(header.innerHTML);

let header2 = document.querySelector("#nana-2");

let list = document.querySelector(".list")

list.innerHTML = "<ul class='list'> <caption>Chưa tày đâu</caption> <li>Nội dung 1</li> </ul>"

header.style.color = "red";
header.style.backgroundColor = "purple";

header2.classList.add("content");

console.log(header2.classList);

header.classList.remove("content");


header.addEventListener("click",function(){
    document.querySelector("body").classList.toggle("dark");
});

header.setAttribute("id", "nana-2");