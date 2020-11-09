import React from "react";

const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo border border-opacity-0 p-3 mb-3">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <p className="text-2xl ">{text}</p>
      </li>
      <button
        onClick={completeHandler}
        className="complete-btn w-8 h-8 bg-black mr-2 mt-2"
      >
        <i className="fas fa-check fa-lg"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn w-8 h-8 bg-black">
        <i className="fas fa-trash fa-lg"></i>
      </button>
    </div>
  );
};

export default Todo;
