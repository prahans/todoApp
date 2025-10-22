let inputBox = document.querySelector("#input-box");
let btn = document.querySelector("button");
let listContainer = document.querySelector("#list-container")
btn.addEventListener("click", () => {
    if(inputBox.value == ""){
        alert("You must enter something");
    }else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.append(span);
    }

    inputBox.value = "";
    saveData();
});

listContainer.addEventListener("click", function(e){
    console.log(e.target.tagName);
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();