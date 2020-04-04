import { store } from '../app';
import { addTodo } from './actions';

function listCreator(title: string, id: number) {
  const listTag = document.createElement('li');
  listTag.innerHTML = document.createElement('h1').innerHTML = title;
  listTag.id = `${id}`;
  return listTag;
}

const unsubscribe = store.subscribe(() => {
  const currentState = store.getState();
  document.getElementById('todos-list').innerHTML = '';
  document.getElementById('goals-list').innerHTML = '';
  currentState.todos.forEach(element => {
    document
      .getElementById('todos-list')
      .appendChild(listCreator(element.title, element.id));
  });
  currentState.goals.forEach(element => {
    document
      .getElementById('goals-list')
      .appendChild(listCreator(element.title, element.id));
  });
});

function addTodoButton() {
  const todoTitle = document.getElementById('todo-title');
  console.log(todoTitle.innerText);
  const id = store.getState().todos.length;
  store.dispatch(
    addTodo({
      complete: false,
      title: todoTitle.innerText,
      id
    })
  );
}

document
  .getElementById('add-todo-btn')
  .addEventListener('click', addTodoButton);
