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
let deleteAllTask = document.getElementById("btn-delete-all");
let statsText = document.querySelector(".stats-section p");

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
        <input type="checkbox" class="task-checkbox" ${data.done ? "checked" : ""}>
        
        <div class="task-body">
            <span class="task-name">${data.task}</span>
            <div class="task-actions">
                <button class="icon-edit">&#9998;</button>
                <button class="icon-delete">&#128465;</button>
            </div>
        </div>

        <div class="task-edit">
            <input type="text" class="task-edit-input" value="${data.task}">
            <div class="task-actions">
                <button class="icon-edit">&#9998;</button>
                <button class="icon-delete">&#128465;</button>
            </div>
        </div>
    </div>
    `;
};

let updateStats = () => {
    let total = 0;
    let done = 0;
    for (const key in myTodos) {
        if(!myTodos[key].remove){
            total++;

            if(myTodos[key].done){
                done++;
            }
        }
    }
    let percent = 0;
    if(total > 0){
        percent = Math.round((done / total) * 100);
    }
    statsText.innerHTML =
        `Tổng công việc: ${total} | Đã hoàn thành: ${done} (${percent}%)`;
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

let changeName = (data,id,overwriteValue) => {
    let dataIndex = findIndexFromId(id);
    data[dataIndex].task = overwriteValue;
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

//function tasklist handler edit handler
let enableEditMode = (element,booleanValue) => {
    if(booleanValue){
        element.classList.add("edit");
    }else{
        element.classList.remove("edit");
    };
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

deleteAllTask.addEventListener("click", () => {
    if(askUser("Bạn có muốn xóa toàn bộ công việc?")){
        taskList.innerHTML = "";
        for (const key in myTodos) {
            myTodos[key].remove = true;
        }
        saveData("myTodos", myTodos);
    }
});
