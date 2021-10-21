const input = document.querySelector("#newTodoInput");
const button = document.querySelector("#addTodoBtn");
const ol = document.querySelector("#todoList")
// console.log(input, button, ol);

button.addEventListener("click", ()=>{
    if(input.value == "") return;

    const todo = document.createElement("li");
    todo.innerText = input.value;
    ol.appendChild(todo);

    // del button
    const del = document.createElement("button");
    del.innerText = "Delete";
    todo.appendChild(del);

    input.value = "";
})

