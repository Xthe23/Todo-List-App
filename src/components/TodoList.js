import React from 'react';
import Todo from "./Todo"


const TodoList = ({todos, setTodos}) => {
  return (
    <div className="todos text-white">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo text={todo.text}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;