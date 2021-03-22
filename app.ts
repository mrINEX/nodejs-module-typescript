window.onload = function(): void {
  interface ToDoList {
    name: string,
    completed: boolean
  }

  const templateToDo = (name: string, completed: boolean): string => {
    return(
      `<div class='todo-item list-group-item ${completed ? 'completed' : ''}'>
          <div class='row'>
            <div class='col-md-2 text-center'>
              <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>
              <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>
            </div>
            <div class='col-md-10'>
              <span class='incomplete text-giant'>${name}</span>
              <span class='completed text-strikethrough text-muted text-giant'>${name}</span>
            </div>
          </div>
          <div class='clearfix'></div>
        </div>`
    );
  }

  const ToDoList: ToDoList[] = [
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
  
  const containerToDoList: HTMLDivElement = document.querySelector('.todo-list');
  const todoAdd: HTMLButtonElement = document.querySelector('.todo-add');
  const todoInput: HTMLInputElement = document.querySelector('.todo-input');
  // const removeCompletedButton: HTMLElement = document.querySelector('.clear-completed');

  function renderTodo(list: ToDoList[], element: HTMLDivElement): void {
    const listTemplate = list.map((todo) => {
      const { name, completed } = todo;
      return templateToDo(name, completed);
    }).join(' ');
    element.innerHTML = listTemplate;
  }

  todoAdd.addEventListener('click', () => console.log('click add', todoInput.value));
  renderTodo(ToDoList, containerToDoList);
};
