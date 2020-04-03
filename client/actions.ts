// Todos Actions
const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

const removeTodo = todo => ({
  type: 'REMOVE_TODO',
  todo
});

const updateTodo = todo => ({
  type: 'UPDATE_TODO',
  todo
});

// Goals Actions
const addGoal = goal => ({
  type: 'ADD_GOAL',
  goal
});

const removeGoal = goal => ({
  type: 'REMOVE_GOAL',
  goal
});

const updateGoal = goal => ({
  type: 'UPDATE_GOAL',
  goal
});
