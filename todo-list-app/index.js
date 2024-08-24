// select the input element and get its value when changes and set it to a variable

const todoListForm = document.querySelector(".todo-form");
const newTodoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

//call this function when form is submitted to add new item
function addNewTodoItem(e) {
  e.preventDefault();

  if (newTodoInput.value.trim() === "") {
    alert("You cannot leave the todo input as blank!");
    return;
  }

  const newTodoListItem = document.createElement("li");
  newTodoListItem.innerHTML = `<span class="todo-item-name">${newTodoInput.value}</span>`;
  newTodoListItem.classList.add("todo-list-item");

  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  editBtn.innerText = "EDIT";
  deleteBtn.innerText = "DELETE";

  editBtn.classList.add("btn", "edit-btn");
  deleteBtn.classList.add("btn", "delete-btn");

  editBtn.addEventListener("click", editTodoItem);
  deleteBtn.addEventListener("click", deleteTodoItem);

  newTodoListItem.append(editBtn, deleteBtn);
  todoList.append(newTodoListItem);

  newTodoInput.value = "";
}

//delete item from the list
function deleteTodoItem(e) {
  const itemToDelete = e.target.parentElement;
  todoList.removeChild(itemToDelete);
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
newTodoInput.addEventListener("input", function () {
  newTodoName = this.value;
});

//form submit to add the new todo item value to the list
todoListForm.addEventListener("submit", addNewTodoItem);
