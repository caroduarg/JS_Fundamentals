const buttonTarea = document.querySelector('button');
const inputTarea = document.querySelector('input');
const listaTareas = document.querySelector('ul');

function agregarTarea() {
    const tarea = inputTarea.value;
    const listItem = document.createElement('li');
    listItem.textContent = tarea;
    listaTareas.appendChild(listItem);
    inputTarea.value = '';
}

buttonTarea.addEventListener('click', agregarTarea);

// react, view, angular
// meta, exgoogle, google . buscar historia de view