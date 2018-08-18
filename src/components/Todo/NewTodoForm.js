import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class NewTodoForm extends Component {
  state = {
    title: ''
  };

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ title: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const todo = {
      id: Date.now(),
      title: this.state.title,
      completed: false
    };
    this.props.addTodo(todo);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.title}
          onChange={this.handleInput}
          placeholder="Add a Todo"
        />
        <Button>Add New</Button>
      </form>
    );
  }
}

export default NewTodoForm;

const Input = styled.input`
  font-size: 26px;
  padding: 0 10px;
  height: 60px;
  width: 320px;
  border: none;
  border-bottom: 2px solid #666;
`;

const Button = styled.button`
  height: 60px;
  width: 220px;
  background: #0099cc;
  color: white;
  border: none;
  font-size: 24px;
  font-weight: bold;
  border-radius: 2px;
  &:hover {
    border: 3px solid #0099cc;
    color: #0099cc;
    background: white;
  }
  margin-left: 20px;
`;
