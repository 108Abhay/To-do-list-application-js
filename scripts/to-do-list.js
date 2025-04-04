const todoList = [
    { name: 'Seminar', duedate: '2025-12-25' },
    { name: 'Collage', duedate: '2025-8-25' }
];
function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject,i) => {
        const { name, duedate } = todoObject;

        const html = `
        <div>${name}</div> <div>${duedate}</div> <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            "
            class = "delete-todo-button"
            >Delete</button>`;
        todoListHTML += html;
    })

    // for (let i = 0; i < todoList.length; i++) {
    //     const todoObject = todoList[i];
    //     const { name, duedate } = todoObject;

    //     const html = `
    //     <div>${name}</div> <div>${duedate}</div> <button onclick="
    //             todoList.splice(${i}, 1);
    //             renderTodoList();
    //         "
    //         class = "delete-todo-button"
    //         >Delete</button>`;
    //     todoListHTML += html;
    // }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
renderTodoList();

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInput = document.querySelector('.js-due-date-input');

    const name = inputElement.value;
    const duedate = dateInput.value;

    todoList.push({ name: name, duedate: duedate });

    inputElement.value = '';
    dateInput.value = ''; // Clear the date input field
    renderTodoList();
}