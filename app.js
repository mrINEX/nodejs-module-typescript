function runApp() {
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
    var createTodo = function (name, completed, list, element) {
        var itemTodo = document.createElement('div');
        itemTodo.classList.add('todo-item', 'list-group-item');
        itemTodo.classList.toggle('completed', completed);
        itemTodo.onclick = function () {
            list.forEach(function (item) {
                if (name === item.name)
                    item.completed = !item.completed;
            });
            element.innerText = '';
            renderTodo(list, element);
        };
        itemTodo.innerHTML = ("<div class='row'>\n          <div class='col-md-2 text-center'>\n            <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>\n            <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>\n          </div>\n          <div class='col-md-10'>\n            <span class='incomplete text-giant'>" + name + "</span>\n            <span class='completed text-strikethrough text-muted text-giant'>" + name + "</span>\n          </div>\n        </div>\n        <div class='clearfix'></div>");
        return itemTodo;
    };
    function renderTodo(list, element) {
        if (list.length === 0) {
            var message = document.createElement('div');
            message.innerHTML = ("<div class='list-group-item text-center text-giant'>\n          <strong>You've completed everything you needed to do!</strong>\n        </div>");
            element.append(message);
            return;
        }
        list.forEach(function (todo) {
            var name = todo.name, completed = todo.completed;
            element.append(createTodo(name, completed, list, element));
        });
    }
    var containerToDoList = document.querySelector('.todo-list');
    var todoAdd = document.querySelector('.todo-add');
    var todoInput = document.querySelector('.todo-input');
    var removeCompletedButton = document.querySelector('.clear-completed');
    var todoInfo = document.querySelector('.todo-info');
    todoAdd.addEventListener('click', function () {
        todoInfo.innerText = '';
        var name = todoInput.value.trim();
        var isExist = ToDoList.filter(function (todo) { return todo.name === name; });
        if (isExist.length !== 0) {
            var message = document.createElement('div');
            message.innerHTML = ("<div class='list-group-item text-center text-giant'>\n          <strong>To do with this name exist</strong>\n        </div>");
            todoInfo.append(message);
            return;
        }
        ToDoList.push({
            name: name,
            completed: false
        });
        containerToDoList.innerText = '';
        renderTodo(ToDoList, containerToDoList);
    });
    removeCompletedButton.addEventListener('click', function () {
        ToDoList = ToDoList.filter(function (todo) { return !todo.completed; });
        containerToDoList.innerText = '';
        renderTodo(ToDoList, containerToDoList);
    });
    renderTodo(ToDoList, containerToDoList);
}
;
runApp();
