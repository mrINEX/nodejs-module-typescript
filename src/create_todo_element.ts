/// <reference path="render_todo_element.ts" />

namespace App {
  export function createTodo(name: string, completed: boolean, list: ToDoList[], element: HTMLDivElement): HTMLDivElement {
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
}
