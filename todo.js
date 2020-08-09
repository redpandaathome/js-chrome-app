const todoForm = document.querySelector(".js-toDoForm"),
    toDoInput = todoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem("TODOS_LS", JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    span.innerText = text;
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    console.log("hmm");
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if( loadedToDos !== null ){
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
    }
}

function init(){
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();