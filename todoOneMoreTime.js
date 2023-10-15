const input = document.querySelector(".text"),
  add = document.querySelector(".add"),
  contentUl = document.querySelector(".content"),
  createCard = document.querySelector(".createCard");


add.addEventListener("click", addTasks);

function addTasks() {
  let inpVal = input.value;
  if (inpVal == "") {
    alert("You neet to type something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `<div class="column"draggable="true">
       ${inpVal} 
            <button class="close">x</button>
            </div>`;
    contentUl.appendChild(li);
  }
  input.value = "";
 
  delBtn(".close");
   dragDropShow();
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

let draggableTodo = null;

function dragDropShow() {
  let allTodo = document.querySelectorAll(".todo"),
    colums = document.querySelectorAll(".column");
console.log(allTodo)
  
  for (let i = 0; i < colums.length; i++) {
    const colum = colums[i];
console.log(colum)

    colum.addEventListener("dragstart", () => {
      draggableTodo = colum;
      console.log("dragstart");
    });

    colum.addEventListener("dragend", () => {
      draggableTodo = null;
      console.log("dragend");
    });

    for (let j = 0; j < allTodo.length; j++) {
      let todo = allTodo[i];

      console.log(todo)

      todo.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("dragover");
      });
      todo.addEventListener("dragenter", function (e) {
        e.preventDefault();
        console.log("dragenter");
        // this.style.backgroung = "rgba(0,0,0,0.3)";
      });
      todo.addEventListener("dragleave", function (e) {
        // this.style.backgroung = "rgba(0,0,0,.3)";
        console.log("dragleave");
      });
      todo.addEventListener("drop", function (e) {
        // this.style.backgroung = "rgba(0,0,0,0)";
        this.append(draggableTodo);
        console.log("drop");
      });
    }
  }
  
    }
  

dragDropShow();

























// // function dragStart(){
// // draggableTodo = this;
// // }
// // function dragEnd(){
// //   draggableTodo = null;
// // }

// // allTodo.forEach(item =>{
// // item.addEventListener('dragover',dragOver);
// // item.addEventListener('dragenter',dragEnter);
// // item.addEventListener('dragleave',dragLeave);
// // item.addEventListener('drop',dragDrop);
// // });

// // function dragOver(e){
// // e.preventDefault();
// // console.log('dragOver')
// // }

// // function dragEnter(){
// //  console.log('dragEnter')
// //   }
// //   function dragLeave(){
// //     console.log('dragLeave')
// //   }

// //   function dragDrop(){
// //    this.appendChild(draggableTodo);
// //    console.log('dragDrop')
// //   }
