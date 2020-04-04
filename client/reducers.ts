import { Action, Todo, Goal } from './interfaces';

export const todos = (state: Array<Todo> = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.todo]);
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
};
export const goals = (state: Array<Goal> = [], action: Action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return state.concat([action.goal]);
    case 'REMOVE_GOAL':
      return state.filter(goal => goal.id === action.id);
    case 'UPDATE_GOAL':
      return state.map(goal =>
        goal.id !== action.id
          ? goal
          : Object.assign({}, goal, { complete: !goal.complete })
      );
    default:
      return state;
  }
};
