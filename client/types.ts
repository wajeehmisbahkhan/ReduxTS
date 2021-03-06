import { Todo, Goal } from './interfaces';

export type State = {
  todos: Array<Todo>;
  goals: Array<Goal>;
};
export type EventType =
  | 'ADD_TODO'
  | 'REMOVE_TODO'
  | 'UPDATE_TODO'
  | 'ADD_GOAL'
  | 'REMOVE_GOAL'
  | 'UPDATE_GOAL';
