const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");

btn.addEventListener("click", addTodo);
ul.addEventListener("click", deleteCheck);

function addTodo(e) {
  e.preventDefault();
  if (input.value === "") {
    null;
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = input.value;
    todoDiv.appendChild(newTodo);
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("checked");
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    todoDiv.appendChild(completeBtn);
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash");
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
    todoDiv.appendChild(trashBtn);
    ul.appendChild(todoDiv);
    input.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList.contains("trash")) {
    const remove = item.parentElement;
    remove.remove();
  }
  if (item.classList.contains("checked")) {
    const checked = item.parentElement;
    checked.classList.toggle("line-through");
  }
}
