import React, { Component, Fragment } from 'react';
import Todos, { TodoList, NewTodoForm } from './components/Todo';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Todos>
          {({ todos, addTodo, completeTodo, removeCompleted }) => (
            <Fragment>
              <HeaderWrapper>
                <NewTodoForm addTodo={addTodo} />
                <Button onClick={removeCompleted}>Clear Completed</Button>
              </HeaderWrapper>
              <TodoList completeTodo={completeTodo} todos={todos} />
            </Fragment>
          )}
        </Todos>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  box-sizing: border-box;
  width: 880px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  height: 60px;
  width: 220px;
  background: #ff9999;
  color: white;
  border: none;
  font-size: 24px;
  font-weight: bold;
  border-radius: 2px;
  &:hover {
    border: 3px solid #ff9999;
    color: #ff9999;
    background: white;
  }
`;
