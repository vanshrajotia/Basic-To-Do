const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-tsk-btn");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(todoInput.value === ''){
        alert("Please Enter something...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= todoInput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.className = "remove";
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    todoInput.value = '';
    savedata();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showtask();