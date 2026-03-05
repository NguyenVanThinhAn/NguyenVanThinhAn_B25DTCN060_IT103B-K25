// biến global
let todoListData = [

];

// hàm
let addTaskFromData = (data,element) => {
    element.innerHTML += `
    <div class="task-item" data-id="${data.id}">
        <input type="checkbox" class="task-checkbox"/>
        <span class="task-text">${data.name}</span>
        <input type="text" class="edit-input" placeholder="">
        <div class="task-actions">
            <button class="btn-edit">✏️ Sửa</button
            ><button class="btn-delete">🗑️ Xóa</button>
        </div>
    </div>
    `;
}

let taskListStateControl = (element) => {
    let emtyElement = document.getElementsByClassName("empty-state");
    console.log(emtyElement);
    
    if(element.children.length < 2){
        emtyElement[0].style.display = "block";
    }else{
        emtyElement[0].style.display = "none";
    }
}

let reloadToDoProcess = (arr,completeElement,totalElement) => {
    let completeCount = 0;
    let totalCount = 0;

    for (const element of arr) {
        if(!element.remove){
            totalCount++;
            if(element.isDone){
                completeCount++
            };
        }
    }
    completeElement.innerText = completeCount;
    totalElement.innerText = totalCount;
}

let updateToDoProcess = (completeElement,value) => {
    let currentProcess = Number(completeElement.innerText);
    if(value){
        completeElement.innerText = ++currentProcess;
    }else{
        completeElement.innerText = --currentProcess;
    }
}


//get phần tử html/global
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");
let processComplete = document.getElementById("completedCount");
let processTotal = document.getElementById("totalCount");


// event
addButton.addEventListener("click",(element)=>{
    if(!Boolean(taskInput.value)){
        alert("Không được để trống tên công việc");
        return;
    }
    let newData = {id: todoListData.length + 1, name: taskInput.value, isDone: false};
    addTaskFromData(newData,taskList);
    todoListData.push(newData);
    taskListStateControl(taskList);
    reloadToDoProcess(todoListData,processComplete,processTotal);
});

taskList.addEventListener("click",(element) => {
    let button = element.target;
    if(button.classList.contains("btn-delete")){
        let mainElement = button.parentElement.parentElement;
        let elementId = Number(mainElement.getAttribute("data-id"));
        todoListData[elementId - 1]["remove"] = true;
        mainElement.remove();
        console.log(todoListData);
        taskListStateControl(taskList);

        reloadToDoProcess(todoListData,processComplete,processTotal);
    }else if(button.classList.contains("btn-edit")){
        let mainElement = button.parentElement.parentElement;
        let cancelButton = mainElement.querySelector(".btn-delete");
        let editInput = mainElement.querySelector(".edit-input");
        let nameText = mainElement.querySelector(".task-text");
        
        button.innerHTML = "💾 Lưu";
        button.classList.toggle("btn-edit");
        button.classList.toggle("btn-save");
        cancelButton.innerHTML = "❌ Hủy";
        cancelButton.classList.toggle("btn-delete");
        cancelButton.classList.toggle("btn-cancel");
        nameText.style.display = "none";
        editInput.style.display = "inline";

        editInput.value = nameText.innerText;
        editInput.focus();
        editInput.select();
    }else if(button.classList.contains("btn-save")){
        let mainElement = button.parentElement.parentElement;
        let elementId = Number(mainElement.getAttribute("data-id"));
        let deleteButton = mainElement.querySelector(".btn-cancel");
        let editInput = mainElement.querySelector(".edit-input");
        let nameText = mainElement.querySelector(".task-text");

        button.innerHTML = "✏️ Sửa";
        button.classList.toggle("btn-edit");
        button.classList.toggle("btn-save");
        nameText.style.display = "inline";
        editInput.style.display = "none";

        deleteButton.innerHTML = "🗑️ Xóa"
        deleteButton.classList.toggle("btn-delete");
        deleteButton.classList.toggle("btn-cancel");

        todoListData[elementId - 1].name = editInput.value;
        nameText.innerText = editInput.value;
    }else if(button.classList.contains("btn-cancel")){
        let mainElement = button.parentElement.parentElement;
        let editButton = mainElement.querySelector(".btn-save");
        let editInput = mainElement.querySelector(".edit-input");
        let nameText = mainElement.querySelector(".task-text");

        editButton.innerHTML = "✏️ Sửa";
        editButton.classList.toggle("btn-edit");
        editButton.classList.toggle("btn-save");
        nameText.style.display = "inline";
        editInput.style.display = "none";

        button.innerHTML = "🗑️ Xóa"
        button.classList.toggle("btn-delete");
        button.classList.toggle("btn-cancel");


        nameText.innerText = editInput.value;
    }else if(button.classList.contains("task-checkbox")){
        let mainElement = button.parentElement;
        let elementId = Number(mainElement.getAttribute("data-id"));
        
        todoListData[elementId - 1].isDone = button.checked;
        
        updateToDoProcess(processComplete,button.checked);
    };
});
