import React from 'react';


const Todo = ({text, setTodos, todos, todo}) => {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(todos.map(el => {
      if(el.id === todo.id) {
        return {...el, completed: !el.completed}
      };
      return el;
    }))
  }
  

  return (
    <div className="todo flex place-content-center m-2">
      <li className={`todo-item w-64 ${todo.completed ? "completed" : ""}`}><p className="text-2xl">{text}</p></li>
      <button onClick={completeHandler} className="complete-btn  w-8 h-8 bg-black ml-10">
         <i className="fas fa-check fa-lg"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn w-8 h-8 bg-black">
         <i className="fas fa-trash fa-lg"></i>
      </button>
    </div>
  );
}

export default Todo;