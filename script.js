const input = document.querySelector("#newTodoInput");
const button = document.querySelector("#addTodoBtn");
const ol = document.querySelector("#todoList")
// console.log(input, button, ol);

button.addEventListener("click",addtodo);
 
ol.addEventListener("click",olEventListener);

function addtodo(){
    if(input.value == "") return;

    const todo = document.createElement("li");
    todo.innerText = input.value;
    ol.appendChild(todo);

    //css on todo
    todo.style.margin = "10px";
    todo.style.padding = "5px";
  
    // del button
    const del = document.createElement("button");
    del.innerText = "Delete";
    todo.appendChild(del);
    
    // css
    del.style.marginLeft = "10px";

    input.value = "";
}

function olEventListener(e){
    if(e.target.innerText === "Delete")
    {
        // console.log(e.target.innerText);
        e.target.parentNode.remove();
    }
}