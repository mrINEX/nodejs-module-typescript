function runApp(): void {
  interface ToDoList {
    name: string,
    completed: boolean
  }

  let ToDoList: ToDoList[] = [
    {
      name: 'Pick up drycleaning',
      completed: false,
    },
    {
      name: 'Clean Batcave',
      completed: false,
    },
    {
      name: 'Save Gotham',
      completed: false,
    }
  ];

  const createTodo = (name: string, completed: boolean, list: ToDoList[], element: HTMLDivElement): HTMLDivElement => {
    const itemTodo = document.createElement('div');
    itemTodo.classList.add('todo-item', 'list-group-item');
    itemTodo.classList.toggle('completed', completed);
    itemTodo.onclick = function() {
      list.forEach((item: ToDoList): void => {
        if (name === item.name)
          item.completed = !item.completed;
      });
      element.innerText = '';
      renderTodo(list, element);
    }
    itemTodo.innerHTML = (
      `<div class='row'>
          <div class='col-md-2 text-center'>
            <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>
            <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>
          </div>
          <div class='col-md-10'>
            <span class='incomplete text-giant'>${name}</span>
            <span class='completed text-strikethrough text-muted text-giant'>${name}</span>
          </div>
        </div>
        <div class='clearfix'></div>`
    );
    return itemTodo;
  }

  function renderTodo(list: ToDoList[], element: HTMLDivElement): void {
    if(list.length === 0) {
      const message: HTMLDivElement = document.createElement('div');
      message.innerHTML = (
        `<div class='list-group-item text-center text-giant'>
          <strong>You've completed everything you needed to do!</strong>
        </div>`
      );
      element.append(message);
      return;
    }

    list.forEach((todo: ToDoList): void => {
      const { name, completed } = todo;
      element.append(createTodo(name, completed, list, element));
    });
  }
  
  const containerToDoList: HTMLDivElement = document.querySelector('.todo-list');
  const todoAdd: HTMLButtonElement = document.querySelector('.todo-add');
  const todoInput: HTMLInputElement = document.querySelector('.todo-input');
  const removeCompletedButton: HTMLButtonElement = document.querySelector('.clear-completed');
  const todoInfo: HTMLDivElement = document.querySelector('.todo-info');

  todoAdd.addEventListener('click', (): void => {
    todoInfo.innerText = '';
    const name = todoInput.value.trim();
    const isExist = ToDoList.filter((todo: ToDoList): boolean => todo.name === name);
    if (isExist.length !== 0) {
      const message: HTMLDivElement = document.createElement('div');
      message.innerHTML = (
        `<div class='list-group-item text-center text-giant'>
          <strong>To do with this name exist</strong>
        </div>`
      );
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

  removeCompletedButton.addEventListener('click', (): void => {
    ToDoList = ToDoList.filter((todo: ToDoList): boolean => !todo.completed);

    containerToDoList.innerText = '';
    renderTodo(ToDoList, containerToDoList);
  });


  renderTodo(ToDoList, containerToDoList);
};

runApp();
