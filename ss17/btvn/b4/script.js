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
                <button class="icon-edit">&#9998;</button>
                <button class="icon-delete">&#128465;</button>
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

let disableData = (data,id) => {
    let dataIndex = findIndexFromId(id);
    data[dataIndex].remove = true;
    saveData("myTodos",myTodos);
};

let askUser = (question) => {
    let answear = prompt(question+ " (có/không)").toLocaleLowerCase().trim();
    if(answear == "có"){
        return true;
    }else{
        return false;
    }
};


//function tasklist handler

let handleCheckboxToggle = (button) => {
    let mainElement = button.parentElement;
    let id = mainElement.getAttribute("todo-id");

    toggleTodoDone(myTodos, id, button.checked);
};

let handleDeleteTask = (button) => {
    let mainElement = button.parentElement.parentElement.parentElement;
    let id = mainElement.getAttribute("todo-id");

    mainElement.remove()

    disableData(myTodos, id);
};

//startup
for (const key in myTodos) {
    if(!myTodos[key].remove){
        taskList.innerHTML += addTaskItem(myTodos[key]);
    }
};

//event
taskList.addEventListener("click",(element)=>{
    let button = element.target;
    if(button.classList.contains("task-checkbox")){
        handleCheckboxToggle(button);
    }else if(button.classList.contains("icon-delete")){
        if(askUser("Bạn có muốn xóa công việc này?")){
            handleDeleteTask(button);
        }
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