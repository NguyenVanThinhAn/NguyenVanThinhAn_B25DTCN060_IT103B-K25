let data = [
    {name: "Quét nhà"},
    {name: "Làm bài tập"},
];

let toDoList = document.getElementById("taskList");

let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("add-button");

let addHtmlFromData = (data,element) => {
    element.innerHTML += `
        <li>${data.name}</li>
    `
};

data.forEach(element => {
    addHtmlFromData(element,toDoList);
});

addButton.addEventListener("click",(element) => {
    if(!Boolean(taskInput.value)){
        alert("Không được để tên việc trống!");
        return;
    };
    let newData = {name: taskInput.value};
    addHtmlFromData(newData,toDoList);
    data.push(newData);

});