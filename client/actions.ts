import { Todo, Goal, Action } from './interfaces';

// Todos Actions
export const addTodo = (todo: Todo): Action => ({
  type: 'ADD_TODO',
  todo
});

export const removeTodo = (todo: Todo): Action => ({
  type: 'REMOVE_TODO',
  todo
});

export const updateTodo = (todo: Todo): Action => ({
  type: 'UPDATE_TODO',
  todo
});

// Goals Actions
export const addGoal = (goal: Goal): Action => ({
  type: 'ADD_GOAL',
  goal
});

export const removeGoal = (goal: Goal): Action => ({
  type: 'REMOVE_GOAL',
  goal
});

export const updateGoal = (goal: Goal): Action => ({
  type: 'UPDATE_GOAL',
  goal
});
