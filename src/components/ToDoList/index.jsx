import React from 'react';
import PropTypes from 'prop-types';

todoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

todoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function todoList(props) {
    const {todos, onTodoClick} = props;
    const handleClick = (todo) =>{
        if(onTodoClick){
            onTodoClick(todo);
        }
    }
    return (
      <ul className="todo-list">
          {todos.map((todo)=>(
              <li key={todo.id} onClick={()=>handleClick(todo)}>{todo.title}</li>
          ))}
      </ul>
    );
}

export default todoList;