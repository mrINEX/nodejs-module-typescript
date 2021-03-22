window.onload = function () {
    var templateToDo = function (name, completed) {
        return ("<div class='todo-item list-group-item " + (completed ? 'completed' : '') + "'>\n          <div class='row'>\n            <div class='col-md-2 text-center'>\n              <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>\n              <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>\n            </div>\n            <div class='col-md-10'>\n              <span class='incomplete text-giant'>" + name + "</span>\n              <span class='completed text-strikethrough text-muted text-giant'>" + name + "</span>\n            </div>\n          </div>\n          <div class='clearfix'></div>\n        </div>");
    };
    var ToDoList = [
        {
            name: 'Pick up drycleaning',
            completed: false
        },
        {
            name: 'Clean Batcave',
            completed: false
        },
        {
            name: 'Save Gotham',
            completed: false
        }
    ];
    var containerToDoList = document.querySelector('.todo-list');
    var todoAdd = document.querySelector('.todo-add');
    var todoInput = document.querySelector('.todo-input');
    // const removeCompletedButton: HTMLElement = document.querySelector('.clear-completed');
    function renderTodo(list, element) {
        var listTemplate = list.map(function (todo) {
            var name = todo.name, completed = todo.completed;
            return templateToDo(name, completed);
        }).join(' ');
        element.innerHTML = listTemplate;
    }
    todoAdd.addEventListener('click', function () { return console.log('click add', todoInput.value); });
    renderTodo(ToDoList, containerToDoList);
};
