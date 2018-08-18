import * as TYPES from './types';

export const addTodo = todo => {
  return { type: TYPES.ADD_TODO, payload: todo };
};

export const completeTodo = id => {
  return { type: TYPES.COMPLETE_TODO, payload: id };
};

export const removeCompleted = () => {
  return { type: TYPES.REMOVE_COMPLETED };
};
