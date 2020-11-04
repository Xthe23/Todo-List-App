import React from 'react';


const Todo = ({text}) => {
  return (
    <div className="todo flex place-content-center m-2">
      <li className="todo-item w-64"><p className="text-2xl">{text}</p></li>
      <button className="complete-btn  w-8 h-8 bg-black ml-10">
         <i className="fas fa-check fa-lg"></i>
      </button>
      <button className="trash-btn w-8 h-8 bg-black">
         <i className="fas fa-trash fa-lg"></i>
      </button>
    </div>
  );
}

export default Todo;