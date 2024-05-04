// seleção de elementos
const todoform = document.querySelector ("#todo-form");
const todoinput = document.querySelector ("#todo-input");
const todolist = document.querySelector ("#todo-list");
const editform = document.querySelector ("#edit-form");
const editinput = document.querySelector ("#edit-input");
const canceleditbtn = document.querySelector ("#cancel-edit-btn");


let oldinputValue;

//funções
function savetodo(Text) {


    const todo = document.createElement("div");
    todo.classList.add("text");

    const todoTitle = document.createElement("h3");
    todoTitle.innertext = Text;

    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todolist.appendChild(todo);

    todoinput.value = "";
    todoinput.focus();
};

const toggleFoms = ()  => {
    editform.classList.toggle("hide");
    todoform.classList.toggle("hide");
    todolist.classList.toggle("hide");
};

const updatetodo = (text) => {
    const todo = document.querySelectorAll(".todo");

    todo.forEach((todo) =>{
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldinputValue){
            todoTitle.innerText = text;
        }
    });
};



//eventos
todoform.addEventListener("submit", (e) => {
    e.preventDefault();

        const inputValue = todoinput;

    if(inputValue); {
        savetodo(inputValue);
        
    }
});


document.addEventListener("click", (e) => {

    const targetEl  = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle =parentEl.querySelector("h3").innertext;
    }

    if (targetEl.classList.contains("finish-todo")){
        parentEl.classList.add("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-todo")){
       toggleFoms();

       editinput.value = todoTitle;
       oldinputValue = todoTitle;
    }
});

canceleditbtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleFoms();
});

editform.addEventListener("submit", (e) =>{
    e.preventDefault();
    const editInputValue = editinput.value;

    if(editInputValue){
updatetodo(editInputValue);
    }

    toggleFoms();
});

