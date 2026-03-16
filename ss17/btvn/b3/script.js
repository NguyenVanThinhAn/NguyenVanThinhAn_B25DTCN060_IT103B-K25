//data
const todos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa", done: false },
];

let myTodos = JSON.parse(localStorage.getItem("myTodos"));

if(!myTodos){
    localStorage.setItem("myTodos",JSON.stringify(todos));
    myTodos = JSON.parse(localStorage.getItem("myTodos"));
}

//get main element
let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task-input");
let addTaskButton = document.getElementById("btn-add-task");
let deleteAllTask = document.getAnimations("btn-delete-all");

//function
let saveData = (accData,currData) => {
    localStorage.setItem(accData,JSON.stringify(currData));
};

let findIndexFromId = (inputId) => {
    let index = Number(inputId) - 1;
    if(index >= 0){
        return index;
    }else{
        return -1;
    }
};

let addTaskItem = (data) => {
    return `
    <div class="task-item" todo-id="${data.id}">
        <input type="checkbox" class="task-checkbox" ${data.done?"checked":""}>
        <div class="task-body">
            <span class="task-name">${data.task}</span>
            <div class="task-actions">
                <span class="icon-edit">&#9998;</span>
                <span class="icon-delete">&#128465;</span>
            </div>
        </div>
    </div>
    `;
};

let toggleTodoDone = (data,id,booleanValue) => {
    let dataIndex = findIndexFromId(id);
    data[dataIndex].done = booleanValue;
    saveData("myTodos",myTodos);
};

//function tasklist handler

let handleCheckboxToggle = (button) => {
    let mainElement = button.parentElement;
    let id = mainElement.getAttribute("todo-id");

    toggleTodoDone(myTodos, id, button.checked);
};

//startup
for (const key in myTodos) {
    taskList.innerHTML += addTaskItem(myTodos[key]);
};

//event
taskList.addEventListener("click",(element)=>{
    let button = element.target;
    if(button.classList.contains("task-checkbox")){
        handleCheckboxToggle(button);
    };
});

addTaskButton.addEventListener("click",(element) => {
    if(Boolean(taskInput.value)){
        let newID = myTodos.length + 1;
        let newData = {id: newID, task: taskInput.value,done: false};
        myTodos.push(newData);
        taskList.innerHTML += addTaskItem(newData);
        saveData("myTodos",myTodos);
    }else{
        alert("Bạn phải nhập tên công việc trước")
    };
});