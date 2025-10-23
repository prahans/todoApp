let inputBox = document.querySelector("#input-box");
let btn = document.querySelector("button");
let listContainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must enter something");
    return;
  }

  let li = document.createElement("li");
  li.textContent = inputBox.value;
  listContainer.append(li);

  let span = document.createElement("span");
  span.textContent = "\u00d7";
  li.append(span);

  inputBox.value = "";
  saveData();
}

btn.addEventListener("click", addTask);

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}

showData();
