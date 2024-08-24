// select the input element and get its value when changes and set it to a variable

const todoListForm = document.querySelector(".todo-form");
const newTodoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
let isEditing = false;
let itemToEdit = null;

//call this function when form is submitted to add new item
function addNewTodoItem() {
  const newTodoListItem = document.createElement("li");
  newTodoListItem.innerHTML = `<span class="todo-item-name">${newTodoInput.value}</span>`;
  newTodoListItem.classList.add("todo-list-item");

  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  editBtn.innerText = "EDIT";
  deleteBtn.innerText = "DELETE";

  editBtn.classList.add("btn", "edit-btn");
  deleteBtn.classList.add("btn", "delete-btn");

  newTodoListItem.append(editBtn, deleteBtn);
  todoList.append(newTodoListItem);

  newTodoInput.value = "";
}

//edit item in the list
function editTodoItem(todoItem) {
  console.log(todoItem);

  const todoItemSpan = todoItem.childNodes[0];
  const todoItemEditBtn = todoItem.childNodes[1];
  const todoItemDeleteBtn = todoItem.childNodes[2];

  const editForm = document.createElement("form");
  const editFormInput = document.createElement("input");
  editFormInput.value = todoItemSpan.innerText;
  editFormInput.classList.add("todo-input");

  editForm.append(editFormInput);
  editForm.addEventListener("submit", saveEdit);

  todoItemSpan.replaceWith(editForm);
  editFormInput.focus();

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("btn", "save-btn");
  saveBtn.addEventListener("click", saveEdit);
  todoItemEditBtn.replaceWith(saveBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.innerText = "Cancel";
  cancelBtn.classList.add("btn", "cancel-btn");
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

    revertButtons();
  }
}

//form submit to add the new todo item value to the list
todoListForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (newTodoInput.value.trim() === "") {
    alert("You cannot leave the todo input as blank!");
    return;
  }

  addNewTodoItem();
});

todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const todoItem = event.target.parentElement;

    if (event.target.innerText === "DELETE") {
      todoItem.remove();
    } else if (event.target.innerText === "EDIT") {
      isEditing = true;
      itemToEdit = todoItem;

      editTodoItem(itemToEdit);
    }
  }
});
