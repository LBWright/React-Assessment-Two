import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todos extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState(({ todos }) => ({
      todos: todos.concat(todo)
    }));
  };

  completeTodo = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      } else return todo;
    });
    this.setState({ todos });
  };

  removeCompleted = () => {
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    const todos = {
      todos: this.state.todos,
      addTodo: this.addTodo,
      completeTodo: this.completeTodo,
      removeCompleted: this.removeCompleted
    };
    const { children } = this.props;
    return children(todos);
  }
}

export default Todos;
