// SELECTORS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EVENT LISTNER

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// FUNCTIONS
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    // empty

    //if (!todoInput.value) {
   //     return;
    //}

    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Check Mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear Todo Input Value
    todoInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
    // Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    //Check Completed

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        
    }
}
