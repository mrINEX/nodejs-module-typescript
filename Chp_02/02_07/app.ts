function getTodo(id) {
  const todo = {
    id: 123,
    title: 'Tittle',
    completed: false
  };

  return todo;
}

let { completed: isCompleted, id, title} = getTodo(123);
