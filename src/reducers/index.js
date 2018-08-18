import * as TYPES from '../actions/types';

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TYPES.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: true };
          }
          return todo;
        })
      };
    case TYPES.REMOVE_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}

export default rootReducer;
