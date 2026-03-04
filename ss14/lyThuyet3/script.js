let button = document.getElementById("btn");
let p2 = document.getElementById("p2");

button.ondblclick = function(){
    console.log("daNhanRoi");
}

p2.addEventListener("click",function(event){
    console.log("Chưa tày đâu",event);
})