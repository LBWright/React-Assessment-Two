import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, removeCompleted } from '../../actions';
import PropTypes from 'prop-types';

class Todos extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };
  addTodo = todo => {
    this.props.addTodo(todo);
  };

  completeTodo = id => {
    this.props.completeTodo(id);
  };

  removeCompleted = () => {
    this.props.removeCompleted();
  };

  render() {
    const todos = {
      todos: this.props.todos,
      addTodo: this.addTodo,
      completeTodo: this.completeTodo,
      removeCompleted: this.removeCompleted
    };
    const { children } = this.props;
    return children(todos);
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, completeTodo, removeCompleted }
)(Todos);
