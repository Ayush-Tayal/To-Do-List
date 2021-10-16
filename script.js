const input = document.querySelector("#newTodoInput");
const button = document.querySelector("#addTodoBtn");
const ol = document.querySelector("#todoList")
// console.log(input, button, ol);

let inputVal = input.value;

button.addEventListener("click", ()=>{
    ol.innerHTML += '<li>'+input.value+'</li'; 
    input.value = "";
})

