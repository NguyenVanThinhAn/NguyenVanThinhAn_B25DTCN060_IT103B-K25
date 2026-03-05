// biến global
let todoListData = [

];

// hàm
let addTaskFromData = (data,element) => {
    element.innerHTML += `
    <div class="task-item" data-id="${data.id}">
        <input type="checkbox" class="task-checkbox" /><span class="task-text"
        >${data.name}</span>
        <div class="task-actions">
            <button class="btn-edit">✏️ Sửa</button
            ><button class="btn-delete">🗑️ Xóa</button>
        </div>
    </div>
    `;
}

//get phần tử html/global
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");

// event
addButton.addEventListener("click",(element)=>{
    if(!Boolean(taskInput.value)){
        alert("Không được để trống tên công việc");
        return;
    }
    let newData = {id: todoListData.length + 1, name: taskInput.value, isDo: false};
    addTaskFromData(newData,taskList);
    todoListData.push(newData);
});

taskList.addEventListener("click",(element) => {
    let button = element.target;
    if(button.classList.contains("btn-delete")){
        let mainElement = button.parentElement.parentElement;
        let elementId = mainElement.getAttribute("data-id");
        mainElement.remove();
    };
});