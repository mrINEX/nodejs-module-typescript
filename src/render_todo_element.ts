/// <reference path="info_todo_element.ts" />
/// <reference path="create_todo_element.ts" />

namespace App {
  export function renderTodo(list: ToDoList[], element: HTMLDivElement): void {
    if(!list.length) {
      addToInfo(`You've completed everything you needed to do!`, element);
      return;
    }

    list.forEach((todo: ToDoList): void => {
      const { name, completed } = todo;
      element.append(createTodo(name, completed, list, element));
    });
  }
}
