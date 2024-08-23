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
  editBtn.classList.add("btn");
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", editTodoItem);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn");
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

//edit item in the list
function editTodoItem(e) {
  const todoItemSpan = e.target.parentElement.childNodes[0];
  const todoItemEditBtn = e.target.parentElement.childNodes[1];
  const todoItemDeleteBtn = e.target.parentElement.childNodes[2];
  const currentText = todoItemSpan.innerText;

  const editForm = document.createElement("form");

  const editFormInput = document.createElement("input");
  editFormInput.value = currentText;
  editFormInput.classList.add("todo-input");

  editForm.append(editFormInput);
  editForm.addEventListener("submit", saveEdit);

  todoItemSpan.replaceWith(editForm);

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("btn");
  saveBtn.classList.add("save-btn");
  saveBtn.addEventListener("click", saveEdit);
  todoItemEditBtn.replaceWith(saveBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.innerText = "Cancel";
  cancelBtn.classList.add("btn");
  cancelBtn.classList.add("cancel-btn");

  cancelBtn.addEventListener("click", cancelEdit);
  todoItemDeleteBtn.replaceWith(cancelBtn);

  function revertButtons() {
    saveBtn.replaceWith(todoItemEditBtn);
    cancelBtn.replaceWith(todoItemDeleteBtn);
  }

  function saveEdit(e) {
    e.preventDefault();

    if (editFormInput.value.trim() === "") {
      return;
    }

    editForm.replaceWith(todoItemSpan);
    todoItemSpan.innerText = editFormInput.value;

    revertButtons();
  }

  function cancelEdit() {
    editForm.replaceWith(todoItemSpan);
    todoItemSpan.innerText = currentText;

    revertButtons();
  }
}

//handle input change and update the newTodoName accordingly
input.addEventListener("input", function () {
  newTodoName = this.value;
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
