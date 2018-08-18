import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, completeTodo }) => {
  return todos.map(todo => (
    <TodoListItem completeTodo={completeTodo} key={todo.id} {...todo} />
  ));
};

export default TodoList;
