let students = [];

function createStudent() {
    let id = prompt("Nhập ID sinh viên:");
    let name = prompt("Nhập tên sinh viên:");
    let age = Number(prompt("Nhập tuổi:"));
    let gpa = Number(prompt("Nhập GPA:"));
    let scholarship = prompt("Có học bổng không? (true/false):") === "true";
    let active = prompt("Tài khoản còn active không? (true/false):") === "true";

    let studentObject = {
        id: id,
        name: name,
        age: age,
        gpa: gpa,
        scholarship: scholarship,
        active: active
    };

    students.push(studentObject);

    alert("Đã thêm sinh viên thành công!");
    console.log(students);
}

function readAllStudents() {
    if (students.length === 0) {
        alert("Danh sách trống.");
        return;
    }

    let formattedList = students.map(function(student) {
        return "ID: " + student.id +
               ", Name: " + student.name +
               ", Age: " + student.age +
               ", GPA: " + student.gpa +
               ", Scholarship: " + student.scholarship +
               ", Active: " + student.active;
    });

    alert(formattedList.join("\n"));
    console.log(formattedList);
}

function filterScholarship() {
    let filteredStudents = students.filter(function(student) {
        return student.gpa >= 8.0;
    });

    if (filteredStudents.length === 0) {
        alert("Không có sinh viên đủ điều kiện học bổng.");
        return;
    }

    let formattedList = filteredStudents.map(function(student) {
        return "ID: " + student.id + ", Name: " + student.name + ", GPA: " + student.gpa;
    });

    alert(formattedList.join("\n"));
    console.log(filteredStudents);
}

function updateProfile() {
    let id = prompt("Nhập ID cần cập nhật:");

    let foundStudent = students.find(function(student) {
        return student.id === id;
    });

    if (!foundStudent) {
        alert("Không tìm thấy ID.");
        return;
    }

    let newName = prompt("Nhập tên mới:");
    let newGpa = Number(prompt("Nhập GPA mới:"));

    foundStudent.name = newName;
    foundStudent.gpa = newGpa;

    alert("Cập nhật thành công!");
    console.log(students);
}

function deleteRecord() {
    let id = prompt("Nhập ID cần xóa:");
    let initialLength = students.length;

    students = students.filter(function(student) {
        return student.id !== id;
    });

    if (students.length === initialLength) {
        alert("Không tìm thấy ID.");
    } else {
        alert("Xóa thành công.");
    }

    console.log(students);
}

function complianceVerify() {
    let ageCondition = students.every(function(student) {
        return student.age >= 18;
    });

    let activeCondition = students.some(function(student) {
        return student.active === true;
    });

    alert("Tất cả >= 18 tuổi: " + ageCondition +
          "\nCó ít nhất 1 tài khoản active: " + activeCondition);

    console.log(ageCondition);
    console.log(activeCondition);
}

function academicStats() {
    if (students.length === 0) {
        alert("Danh sách trống.");
        return;
    }

    let totalGpa = students.reduce(function(sum, student) {
        return sum + student.gpa;
    }, 0);

    let averageGpa = totalGpa / students.length;

    alert("GPA trung bình: " + averageGpa);
    console.log(averageGpa);
}

function dataNormalization() {
    students = students.map(function(student) {
        return {
            id: student.id,
            name: student.name.trim().toUpperCase(),
            age: student.age,
            gpa: student.gpa,
            scholarship: student.scholarship,
            active: student.active
        };
    });

    alert("Đã chuẩn hóa dữ liệu.");
    console.log(students);
}

function mainMenu() {
    let isRunning = true;

    while (isRunning) {
        let choice = prompt(`
            Chọn chức năng:
            1. Create Student
            2. Read All Students
            3. Filter Scholarship
            4. Update Profile
            5. Delete Record
            6. Compliance Verify
            7. Academic Stats
            8. Data Normalization
            9. Thoát
        `);

        switch (choice) {
            case "1":
                createStudent();
                break;
            case "2":
                readAllStudents();
                break;
            case "3":
                filterScholarship();
                break;
            case "4":
                updateProfile();
                break;
            case "5":
                deleteRecord();
                break;
            case "6":
                complianceVerify();
                break;
            case "7":
                academicStats();
                break;
            case "8":
                dataNormalization();
                break;
            case "9":
                isRunning = false;
                alert("Đã thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
    }
}

mainMenu();