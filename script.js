//selectors

const todoInput = document.querySelector('.todo_input');
const todobtn = document.querySelector('.todo_btn');
const todoList = document.querySelector('.todo_list');

//EventListeners
todobtn.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteTodo);

//Function
function addTodo() {
    if(todoInput.value !== ""){
    //add div
    const todo_div = document.createElement("div");
    todo_div.classList.add("todo");
    //create li 
    const new_todo = document.createElement("li");
    new_todo.innerText = todoInput.value;
    new_todo.classList.add("todo_item");
    todo_div.appendChild(new_todo);
   
    //create remove Button
    const remove_todo = document.createElement("button");
    remove_todo.classList.add("remove_todo_btn");
    remove_todo.innerText = "delete";
    todo_div.appendChild(remove_todo);

    //append to list(ul)
    todoList.appendChild(todo_div);
    //clear input value 
    todoInput.value = "";
}
}
function deleteTodo(event) {
    const item = event.target;
    if(item.classList[0] === "remove_todo_btn") {
        const todo = item.parentElement;
        todo.remove();
    }

}