let defaultData = "day";
let stateDataThemeStyle = localStorage.getItem("state-data-theme-style");

if(!stateDataThemeStyle){
    localStorage.setItem("state-data-theme-style",defaultData);
    stateDataThemeStyle = defaultData;
}

let saveData = (newData) => {
    localStorage.setItem("state-data-theme-style",newData);
}

let switchThemeStyle = () => {

}

let toggleButton = document.getElementById("btn-change-theme");

toggleButton.addEventListener("click", (e) => {
    if(localStorage.getItem("state-data-theme-style") == "day"){
        document.documentElement.classList.add("night");
        saveData("night");
    }else{
        document.documentElement.classList.remove("night");
        saveData("day");
    }
})