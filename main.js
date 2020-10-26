const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");

/* btn.addEventListener("click", () => {
  if (input.value === "") {
    null;
  } else {
    let text = document.createElement("li");
    text.innerHTML = `${input.value} <i class="fa fa-trash"></i><i class="fa fa-check"></i>`;
    ul.appendChild(text);
    input.value = "";
    let trash = document.querySelector(".fa.fa-trash");
    text.addEventListener("click", () => {
      console.log(trash);
    });
  }
}); */

btn.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();
  const newTodo = document.createElement("li");
  newTodo.innerText = "yo";
  ul.appendChild(newTodo);
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fa fa-check"></i>';
  ul.appendChild(completeBtn);
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
  ul.appendChild(trashBtn);
}
