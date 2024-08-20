// select the input element and get its value when changes and set it to a variable

const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");
const listItem = document.querySelector(".todo-list-item");

let newTodoName = "";

//call this function when form is submitted to add new item
function addNewTodoItem() {
  const newListItem = document.createElement("li");
  newListItem.classList.add("todo-list-item");

  const itemNameSpan = document.createElement("span");
  itemNameSpan.innerText = newTodoName;
  itemNameSpan.classList.add("todo-item-name");

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTodoItem);

  newListItem.append(itemNameSpan, editBtn, deleteBtn);
  list.append(newListItem);
}

//delete item from the list
function deleteTodoItem(e) {
  const itemToDelete = e.target.parentElement;
  list.removeChild(itemToDelete);
}

//handle input change and update the newTodoName accordingly
input.addEventListener("input", function () {
  newTodoName = this.value;
  console.log({ newTodoName });
});

//form submit to add the new todo item value to the list
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (newTodoName.trim() !== "") {
    // call a function to add a new item to the list
    addNewTodoItem();

    input.value = "";
    newTodoName = "";
  }
});
