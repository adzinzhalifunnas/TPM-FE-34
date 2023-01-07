function _id(id){
    return document.getElementById(id);
}

function _class(className){
    return document.getElementsByClassName(className);
}

const inputTodo = _id('todo');
const inputSearch = _id('search');
const todoGallery = _id('todo-gallery');
const addButton = _id('add-btn');
const searchButton = _id('search-btn');

addButton.addEventListener('click', addTodo);
searchButton.addEventListener('click', searchTodo);

function toggleButton(id){
    _id(`button-wrapper-${id}`).classList.toggle('active')
}

const todoList = []; // Array of Objects
let counter = 0;

function addTodo(){
    const todo = inputTodo.value;
    if(todo.length === 0){
        return;
    }
    const todoObj = {
        'id' : counter,
        'title': todo,
        'checked' : false
    }
    todoList.push(todoObj);
    counter++;
    updateGallery(); // Update Gallerynya
    // console.log(todoList)
}

// Function untuk mencari todo dengan memfilter arraynya
function searchTodo(){
    const searchString = inputSearch.value;
    // Cara 1 menggunakan forEach iteration
    const filteredList = [];
    todoList.forEach((todo) => {
        if(todo.title.toLowerCase().includes(searchString.toLowerCase())){
            filteredList.push(todo);
        }
    });
    // Cara 2 menggunakan filter iteration
    // const filteredList = todoList.filter(function(todo){
    //     return todo.title.toLowerCase().includes(searchString.toLowerCase())
    // })
    updateGallery(filteredList);
}

// Function ini mengupdate konten dari gallery berdasarkan isi array todoList
// parameter list = todoList menandakan bahwa value default dari variabel list adalah todoList apabila tidak ada yang di passing
function updateGallery(list = todoList){
    todoGallery.innerHTML = ""
    list.forEach(function(todo, index){
        const todoCard = document.createElement('div');
        todoCard.className = "todo-card"
        todoCard.id = `card-${todo.id}`
        todoCard.innerHTML = `
            <div class="todo">
                <input type="checkbox" class="todo-checkbox" id="check-${todo.id}" onchange="setChecked(${todo.id}, this.checked)">
                <input type="text" class="todo-title" id="title-${todo.id}" value="${todo.title}" readonly>
                <div class="option-btn" onclick="toggleButton(${todo.id})">
                    <img src="assets/img/three-dots-icon.png" alt="Dots">
                </div>
            </div>
            <div class="button-wrapper" id="button-wrapper-${todo.id}">
                <img src="assets/img/edit-icon.png" alt="Edit Icon" onclick="updateTodo(${todo.id})">
                <img src="assets/img/trash-icon.png" alt="Trash Icon"  onclick="removeTodo(${todo.id})">
            </div>
        `
        todoGallery.append(todoCard);
    })
}

function setChecked(id, checked){
    todoList.forEach(function(todo){
        if(todo.id === id){
            todo.checked = checked;
            // console.log(todo);
        }
    })
    _id(`title-${id}`).classList.toggle('strikethrough');
}

function updateTodo(id){
    const titleField = _id(`title-${id}`);
    titleField.readOnly = false;
    titleField.focus();
    titleField.onkeydown = function(e){
        if(e.key === "Enter"){
            todoList.forEach(function(todo){
                if(todo.id === id){
                    todo.title = titleField.value;
                    // console.log(todo);
                }
            })
            titleField.readOnly = true;
            this.onkeydown = null;
        }
    }
}

function removeTodo(id){
    // find() digunakan untuk mengiterasi array dan mencari elemen pertama yang cocok
    index = todoList.find((todo) => todo.id == id)
    const removed = todoList.splice(index, 1)
    _id(`card-${id}`).remove();
    // console.log(removed) // untuk debug mana yang dihapus
}