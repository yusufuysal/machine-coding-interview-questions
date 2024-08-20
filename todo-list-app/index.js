// select the input element and get its value when changes and set it to a variable

let newTodoName = "";

const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");
const listItem = document.querySelector(".todo-list-item");

function addNewTodoItem() {
  const newListItem = document.createElement("li");

  const itemNameSpan = document.createElement("span");
  itemNameSpan.innerText = newTodoName;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  newListItem.append(itemNameSpan, editBtn, deleteBtn);
  list.append(newListItem);
}

input.addEventListener("input", function () {
  newTodoName = this.value;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (newTodoName !== "") {
    // call a function to add a new item to the list
    addNewTodoItem();
    newTodoName = "";
  }

  console.log(`${newTodoName} is added.`);
});
