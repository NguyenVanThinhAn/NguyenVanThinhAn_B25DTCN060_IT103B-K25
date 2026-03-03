let running = true;

let data = [
    {id: "1", name: "Nguyen Van A", age: 19, wage: 10000, position: "Developer"},
    {id: "2", name: "B", age: 19, wage: 20000, position: "Developer"},
    {id: "3", name: "C", age: 19, wage: 5000, position: "Manager"},
];

let findEmpFromID = (arr,inputId) => {
    return arr.find(element => {
        return element.id == inputId;
    })
};

let findEmpFromName = (arr,inputName) => {
    return arr.find(element => {
        return element.name == inputName;
    })
};

let findEmpFromPosition = (arr,inputPosition) => {
    return arr.find(element => {
        return element.position == inputPosition;
    })
};

let findNameAndGiveBackIndex = (arr,inputName) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].name == inputName){
            return i;
        }        
    }
    return -1;
};

let positionList = {
    Developer: true,
    Tester: true,
    Manager: true,
    Intern: true,
};


let addEmploye = (arr) => {
    let newId = prompt("Nhập id của nhân viên");
    let newName = prompt("Nhập tên của nhân viên");
    let Age = parseInt(prompt("Nhập tuổi của nhân viên")) ;
    let newWage = parseInt(prompt("Nhập lương của nhân viên"));
    let newPosition = prompt("Nhập vị trí của nhân viên");
    
    while (findEmpFromID(arr,newId)) {
        newId = prompt("ID đã tồn tại, vui lòng nhập id khác");
    };

    while (findEmpFromName(arr,newName)){
        newName = prompt("Tên nhân viên đã tồn tại, vui lòng nhập lại");
    };

    while (Age < 18){
        Age = parseInt(prompt("Tuổi phải trên 18"));
    };

    while (newWage <= 0) {
        newWage = parseInt(prompt("Lương phải lớn hơn 0"));
    };

    while (!positionList[newPosition]) {
        newPosition = prompt("Chức vụ phải là một trong số sau: Developer,Tester,Manager,Intern");
    };

    data.push({id: newId,name: newName,age: Age,wage: newWage,position: newPosition});
};

let deleteEmp = (arr,empName) => {
    let empIndex = findNameAndGiveBackIndex(arr,empName);
    if(empIndex >= 0){
        let accept = prompt("Bạn có đồng ý xóa nhân viên này không?(có/không)") == "có" ? true:false;
        if(accept){
            arr.splice(empIndex,1)
        };
        alert("Đã xóa nhân viên");
    };
};

let viewEmpList = (arr) => {
    let log = "";
    arr.forEach(element => {
        log += "\n";
        for (const key in element) {
            log += ` ${key}: ${element[key]} `;
        };
    });
    return log;
};

let updateEmpData = (arr,empName) => {
    let empIndex = findNameAndGiveBackIndex(arr,empName);
    if(empIndex >= 0){
        let newWage = parseInt(prompt("Nhập lương mới của nhân viên"));
        let newPosition = prompt("Nhập vị trí mới của nhân viên");

        while (newWage <= 0) {
            newWage = parseInt(prompt("Lương phải lớn hơn 0"));
        };

        while (!positionList[newPosition]) {
            newPosition = prompt("Chức vụ phải là một trong số sau: Developer,Tester,Manager,Intern");
        };

        alert("Đã cập nhật nhân viên " + empName);
    }else{
        alert("Nhân viên không tồn tại!");
    };
};

let findEmp = (arr,chose) => {
    if(chose == "tên"){
        let log = "";
        let findData = findEmpFromName(arr,prompt("Nhập tên nhân viên cần tìm"));
        if(!findData){
            alert("Không tìm thấy ai");
            return
        }
        for (const key in findData) {
            log += ` ${key}: ${findData[key]} `;
        };
        alert(log);
    }else{
        let log = "";
        let findData = findEmpFromID(arr,prompt("Nhập id nhân viên cần tìm"));
        if(!findData){
            alert("Không ai làm chức vụ đó!");
            return
        }
        for (const key in findData) {
            log += ` ${key}: ${findData[key]} `;
        };
        alert(log);
    };
    
};

let filterFromPosition = (arr,inputPosition) => {
    if(!positionList[inputPosition]){
        alert("Không tìm thấy chức vụ nào như vậy(Developer,Tester,Manager,Intern)");
        return
    };
    let filteredData = arr.filter(element => {
        return element.position == inputPosition;
    });
    alert(viewEmpList(filteredData));
};

let sumOfWage = (arr) => {
    return arr.reduce((acc,curr) => {
        return acc + curr.wage;
    },0);
};

let sortEmp = (arr,chose) => {
    if(chose == "tăng dần"){
        alert(viewEmpList(arr.sort((a,b) => {return a.wage - b.wage})));
    }else{
        alert(viewEmpList(arr.sort((a,b) => {return b.wage - a.wage})));
    };
};

let findRange = (arr,min,max) => {
    let newArr = arr.filter(element => {
        return element.wage > min && element.wage < max;
    });
    alert(viewEmpList(newArr));
}

do {
    let select = parseInt(prompt(`
        1. Thêm nhân viên
        2. Xóa nhân viên
        3. Hiển thị danh sách
        4. Cập nhật thông tin nhân viên
        5. Tìm nhân viên
        6. Lọc nhân viên theo chức vụ
        7. Tính tổng lương công ty
        8. Sắp xếp nhân viên theo lương
        9. Tìm kiếm nhân viên theo khoảng lương
        10. Thoát
        `));

    switch (select) {
        case 1:
            addEmploye(data);
            break;
        case 2:
            deleteEmp(data,prompt("Nhập tên nhân viên muốn xóa"));
            break;
        case 3:
            alert(viewEmpList(data));
            break;
        case 4:
            updateEmpData(data,prompt("Nhập tên nhân viên muốn chỉnh sửa:"));
            break;
        case 5:
            findEmp(data,prompt("Bạn muốn tìm nhân viên theo tên hay id(tên/id)"))
            break;
        case 6:
            filterFromPosition(data,prompt("Nhập chức vụ bạn muốn lọc"));
            break;
        case 7:
            alert("Tổng số lương hiện tại: " + sumOfWage(data));
            break;
        case 8:
            sortEmp(data,prompt("Bạn muốn sắp xếp theo?(tăng dần/giảm dần)"));
            break;
        case 9:
            findRange(data,parseInt(prompt("Nhập khoảng nhỏ nhất")),parseInt(prompt("Nhập khoảng lớn nhất")));
            break;
        case 10:
            running = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ")
            break;
    }
} while (running);