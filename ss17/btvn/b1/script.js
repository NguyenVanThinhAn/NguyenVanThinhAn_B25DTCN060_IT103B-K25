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


//functions
let saveData = (accData,currData) => {
    localStorage.setItem(accData,JSON.stringify(currData));
};

let findIndexFromId = (inputId,data) => {
    let index = Number(data[inputId - 1]);
    if(index){
        return index;
    }else{
        return -1;
    }
};

let addTaskItem = (data) => {
    return `
    <div class="task-item" todo-id="${data.id}">
        <input type="checkbox" class="custom-checkbox" ${data.done?"checked":""}>
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

//startup
for (const key in myTodos) {
    taskList.innerHTML += addTaskItem(myTodos[key]);
};

//Event

taskList.addEventListener("click",(element)=>{

});