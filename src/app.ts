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
    const itemTodo: HTMLDivElement = document.createElement('div');
    itemTodo.classList.add('todo-item', 'list-group-item');
    itemTodo.classList.toggle('completed', completed);
    itemTodo.onclick = function(): void {
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
    if(!list.length) {
      addToInfo(`You've completed everything you needed to do!`, element);
      return;
    }

    list.forEach((todo: ToDoList): void => {
      const { name, completed } = todo;
      element.append(createTodo(name, completed, list, element));
    });
  }

  function addToInfo(message: string, infoElement: HTMLDivElement): void {
    const messageElement: HTMLDivElement = document.createElement('div');
    messageElement.innerHTML = (
      `<div class='list-group-item text-center text-giant'>
        <code>${message}</code>
      </div>`
    );
    infoElement.append(messageElement);
  }
  
  const containerToDoList: HTMLDivElement = document.querySelector('.todo-list');
  const todoAdd: HTMLButtonElement = document.querySelector('.todo-add');
  const todoInput: HTMLInputElement = document.querySelector('.todo-input');
  const removeCompletedButton: HTMLButtonElement = document.querySelector('.clear-completed');
  const todoInfo: HTMLDivElement = document.querySelector('.todo-info');

  todoAdd.addEventListener('click', (): void => {
    todoInfo.innerText = '';
    const name = todoInput.value.trim();
    todoInput.value = '';
    const isExist = ToDoList.filter((todo: ToDoList): boolean => todo.name === name);

    if (!name) {
      addToInfo('The todo cannot be empty', todoInfo);
      return;
    }
    if (isExist.length) {
      addToInfo('To do with this name exist', todoInfo);
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
