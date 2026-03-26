//data
let defaultData = [
  { id: 1, name: "Nắng ấm xa dần", author: "Sơn Tùng MTP" },
  { id: 2, name: "Ba kể con nghe", author: "Trịnh Thăng Bình" },
  { id: 3, name: "Bóng phù hoa", author: "Phương Mỹ Chi" },
  { id: 4, name: "Sóng gió", author: "J97" },
];

let songLists = JSON.parse(localStorage.getItem("list"));

if (!songLists) {
  localStorage.setItem("list", JSON.stringify(defaultData));
  songLists = defaultData;
}

//get element
let songTable = document.querySelector("#songTable");
let inputSongName = document.getElementById("title");
let inputAuthorName = document.getElementById("artist");
let addBtn = document.getElementById("submitBtn");
let searchBar = document.getElementById("search");

let songListElement = document.getElementsByClassName("song-element");

let formTitle = document.getElementById("formTitle");

let editingIndex = 0;
let editingElement = null;

//function
let saveData = () => {
  localStorage.setItem("list", JSON.stringify(songLists));
};

let dataToHtml = (data) => {
  return `
    <tr class="song-element">
        <td class="id">${data.id}</td>
        <td class="name">${data.name}</td>
        <td class="author">${data.author}</td>
        <td> 
            <button class="btn-edit">Sửa</button>
            <button class="btn-delete">Xóa</button>
        </td>
    </tr>
    `;
};

function render() {
  const lists = JSON.parse(localStorage.getItem("list"));

  lists.forEach((itemList) => {
    if(!itemList.delete){
        songTable.innerHTML += `
                <tr class="song-element">
                    <td class="id">${itemList.id}</td>
                    <td class="name">${itemList.name}</td>
                    <td class="author">${itemList.author}</td>
                    <td> 
                        <button class="btn-edit">Sửa</button>
                        <button class="btn-delete">Xóa</button>
                    </td>
                </tr>
            `;
    };
    });
}

let toggleEditMode = (enable) => {
  if(enable){
    formTitle.innerHTML = "🎵 Sua bài hát";
    addBtn.innerHTML = "Cap nhat";
    addBtn.classList.add("mode-edit");
  }else{
    formTitle.innerHTML = "🎵 Thêm bài hát";
    addBtn.innerHTML = "Thêm";
    addBtn.classList.remove("mode-edit");
  }
};

let editHandle = () => {
    toggleEditMode(false);
    let songName = editingElement.querySelector(".name");
    let author = editingElement.querySelector(".author");
    songName.innerHTML = inputSongName.value;
    author.innerHTML = inputAuthorName.value;
    songLists[editingIndex].name = inputSongName.value;
    songLists[editingIndex].author = inputAuthorName.value;
    saveData();
    inputSongName.value = "";
    inputAuthorName.value = "";
};

let addSongHandle = () => {
    let newData = {
      id: songLists.length + 1,
      name: inputSongName.value,
      author: inputAuthorName.value,
    }
    songLists.push(newData);
    songTable.insertAdjacentHTML("beforeend", dataToHtml(newData));
}

let editHandler = (button) => {
    let mainElement = button.parentElement.parentElement;
    toggleEditMode(true);
    editingIndex = Number(mainElement.querySelector(".id").innerHTML) - 1;
    editingElement = mainElement;
    let songName = mainElement.querySelector(".name");
    let author = mainElement.querySelector(".author");
    inputSongName.value = songName.innerHTML;
    inputAuthorName.value = author.innerHTML;
};

let deleteHandle = (button) => {
    let mainElement = button.parentElement.parentElement;
    let dataIndex = Number(mainElement.querySelector(".id").innerHTML) - 1;
    songLists[dataIndex]["delete"] = true;
    mainElement.remove();
    saveData();
};

//startup
render();


//event
addBtn.addEventListener("click", (e) => {
  if (!Boolean(inputSongName.value) || !Boolean(inputAuthorName.value)) {
      console.log("khong duoc de trong");
      return;
  }

  if(addBtn.classList.contains("mode-edit")){
    editHandle();
    saveData();
  }else{
    addSongHandle();
    saveData();
  }

});

songTable.addEventListener("click",(event) => {
  let button = event.target;
  if(button.classList.contains("btn-edit")){
    editHandler(button);
  }else if(button.classList.contains("btn-delete")){
    deleteHandle(button);
  }
});

searchBar.addEventListener("input", (event) => {
  let keyword = searchBar.value.toLowerCase().trim();

  for (let i = 0; i < songListElement.length; i++) {
    let songName = songListElement[i].querySelector(".name").innerHTML.toLowerCase();

    if (!keyword) {
      songListElement[i].classList.remove("hide");
    } else if (songName.includes(keyword)) {
      songListElement[i].classList.remove("hide");
    } else {
      songListElement[i].classList.add("hide");
    }
  }
});

