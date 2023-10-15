const input = document.querySelector(".text"),
  add = document.querySelector(".add"),
  contentUl = document.querySelector(".content"),
  createCard = document.querySelector(".createCard");

let draggableTodo = null;

add.addEventListener("click", addTasks);

function addTasks() {
  let inpVal = input.value;
  if (inpVal == "") {
    alert("You neet to type something!");
  } else {
    let li = document.createElement("li");
    draggableTodo = li;
    li.innerHTML = `<div class="column" draggable="true" onDragStart(event)>
       ${inpVal} 
            <button class="close">х</button>
            </div>`;

    contentUl.appendChild(li);
  }
  input.value = "";

  delBtn(".close");
}

function delBtn(close) {
  let closeBtn = document.querySelectorAll(close);

  closeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.parentNode.remove();
    });
  });
}

createCard.addEventListener("click", addNewCard);

function addNewCard() {
  let wrapperTask = document.querySelector(".wrapper_tasks");
  let div = document.createElement("div");
  div.classList.add("todo");
  div.innerHTML = `
    <span contenteditable="true" class="title">Enter the title</span>
    `;
  wrapperTask.appendChild(div);
  changeTittle();
  dragDropShow();
  delBtn(".close");
}

function changeTittle() {
  let title = document.querySelectorAll(".title");

  title.forEach((title) => {
    title.addEventListener("click", (e) => (e.target.textContent = ""));
  });
}

changeTittle();

function dragDropShow() {
  let allTodo = document.querySelectorAll(".todo");
  console.log(allTodo);

  for (let i = 0; i < allTodo.length; i++) {
    let todo = allTodo[i];

    console.log(todo);

    todo.addEventListener("dragover", (e) => {
      e.preventDefault();
      console.log("dragover");
    });
    todo.addEventListener("dragenter", function (e) {
      e.preventDefault();
      console.log("dragenter");
    });
    todo.addEventListener("dragleave", function (e) {
      console.log("dragleave");
    });
    todo.addEventListener("drop", function (e) {
      this.append(draggableTodo);
      console.log("drop");
    });
  }
}

dragDropShow();
