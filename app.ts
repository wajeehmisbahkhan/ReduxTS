import { createStore } from './library/store';
import { todos, goals } from './client/reducers';
import { Action } from './client/interfaces';
import { State } from './client/types';
import { addTodo } from './client/actions';

// combine reducers
function app(
  state: State = {
    todos: [],
    goals: []
  },
  action: Action
) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  };
}

const store = createStore(app);
store.dispatch(
  addTodo({
    complete: false,
    id: 0,
    title: 'Hello World'
  })
);
console.log(store.getState());
export { store };
