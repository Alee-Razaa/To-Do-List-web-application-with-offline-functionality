const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Addtask() {
  if (inputBox.value === "") {
    alert("You must write someting!");
  } else {
    let listElement = document.createElement("li");
    listElement.innerHTML = inputBox.value;
    listContainer.appendChild(listElement);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listElement.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

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
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
