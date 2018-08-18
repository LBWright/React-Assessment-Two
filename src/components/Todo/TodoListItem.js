import React from 'react';

import styled from 'styled-components';

const TodoListItem = ({ id, title, completed, completeTodo }) => {
  return (
    <ListWrapper>
      <Item completed={completed}>{title}</Item>
      <Button
        disabled={completed}
        onClick={() => {
          completeTodo(id);
        }}
      >
        Complete
      </Button>
    </ListWrapper>
  );
};

export default TodoListItem;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin: 0 auto;
`;

const Item = styled.h4`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  font-size: 32px;
`;

const Button = styled.button`
  height: 50px;
  width: 160px;
  align-self: center;
  color: #55bb55;
  background: white;
  border: 3px solid #66cc66;
  border-radius: 2px;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color: #44aa44;
    background: white;
    border 3px solid #44aa44;
  }
  &:disabled {
    color: #ff9999;
    border: 3px solid #ff9999;

  }
`;
