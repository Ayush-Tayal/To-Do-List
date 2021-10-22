const input = document.querySelector("#newTodoInput");
const button = document.querySelector("#addTodoBtn");
const ol = document.querySelector("#todoList")
// console.log(input, button, ol);

button.addEventListener("click", ()=>{
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

    // event listener on del 
    ol.addEventListener("click",(e)=>{
        if(e.target.innerText === "Delete")
        {
            e.target.parentNode.remove();
        }
    })

    // -----------------------
    input.value = "";

})

