/// <reference path="create_todo_element.ts" />
/// <reference path="render_todo_element.ts" />
/// <reference path="info_todo_element.ts" />

namespace App {
  export function runApp(dataToDoList: ToDoList[]): void {
    const containerToDoList: HTMLDivElement = document.querySelector('.todo-list');
    const todoAdd: HTMLButtonElement = document.querySelector('.todo-add');
    const todoInput: HTMLInputElement = document.querySelector('.todo-input');
    const removeCompletedButton: HTMLButtonElement = document.querySelector('.clear-completed');
    const todoInfo: HTMLDivElement = document.querySelector('.todo-info');

    todoAdd.addEventListener('click', (): void => {
      todoInfo.innerText = '';
      const name = todoInput.value.trim();
      todoInput.value = '';
      
      const isExist = dataToDoList.filter((todo: ToDoList): boolean => todo.name === name);

      if (!name) {
        addToInfo('The todo cannot be empty', todoInfo);
        return;
      }
      if (isExist.length) {
        addToInfo('To do with this name exist', todoInfo);
        return;
      }

      dataToDoList.push({
        name: name,
        completed: false
      });

      containerToDoList.innerText = '';
      renderTodo(dataToDoList, containerToDoList);
    });

    removeCompletedButton.addEventListener('click', (): void => {
      dataToDoList = dataToDoList.filter((todo: ToDoList): boolean => !todo.completed);

      containerToDoList.innerText = '';
      renderTodo(dataToDoList, containerToDoList);
    });

    renderTodo(dataToDoList, containerToDoList);
  };
}
